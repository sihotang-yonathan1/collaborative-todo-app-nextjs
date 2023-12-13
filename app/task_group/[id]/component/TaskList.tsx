"use client"

import { useState } from "react"
import TaskRow from "./TaskRow"

type TaskDataType = {
    id: number,
    title: string | null,
    assignedPerson: string[] | [],
    status: string,
    comment: string | null,
    priority_level: number | null,
    is_client_accepted: boolean | null
}

export default function TaskList({taskData, tugasListId, userRole, username}: 
    {taskData: TaskDataType[], tugasListId: number, userRole: string, username: string}){
    const [tempTaskList, setTempTaskList] = useState<TaskDataType[]>(taskData)
    
    const sortedData = [...tempTaskList].sort((a, b) => {
        const priorityA = a.priority_level ?? 9999;
        const priorityB = b.priority_level ?? 9999;
      
        if (priorityA < priorityB) {
          return -1;
        } else if (priorityA > priorityB) {
          return 1;
        } else {
          return 0;
        }
      });

    function handleAddTask(){
        // add task to database
        const addTaskFunction = async () => {
            await fetch(`http://localhost:3000/api/v1/tugas`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    title: "title",
                    status: 'in_progress',
                    comment: "comment",
                    tugasListId: Number(tugasListId)  // TODO: set based on current task_group_id
                })
            })
        }
        addTaskFunction()

        setTempTaskList(prev => [
            ...prev,
            {  
                id: prev.length + 1,
                title: "title",
                assignedPerson: [],
                status: 'in_progress',
                comment: "comment",
                priority_level: prev.length,
                is_client_accepted: null
            }
        ])
        
    }

    function handleDeleteTask(taskId: number) {
        const deleteTaskFunction = async () => {
            await fetch(`http://localhost:3000/api/v1/tugas`, {
                method: "DELETE",
                credentials: "include",
                body: JSON.stringify({
                    'tugasId': taskId
                })
            })
        }
        deleteTaskFunction()
        const newTempList = tempTaskList.filter((value) => value.id !== taskId)
        setTempTaskList(_ => newTempList)
    }

    function handleTaskListPriority(tugas_id: number, action: "up" | "down") {
        console.log(`tugas if: ${tugas_id}`);
        let newTaskList: TaskDataType[] = [...sortedData];
        const movedTasks = new Set<number>();
      
        const currentIndex = newTaskList.findIndex((task) => task.id === tugas_id);
      
        if (currentIndex !== -1) {
          const adjacentIndex = action === "up" ? currentIndex - 1 : currentIndex + 1;
      
          if (adjacentIndex >= 0 && adjacentIndex < newTaskList.length) {
            // Check if the task has already been moved
            if (!movedTasks.has(currentIndex)) {
              const tempPriorityLevel = newTaskList[adjacentIndex].priority_level;
              newTaskList[adjacentIndex].priority_level = newTaskList[currentIndex].priority_level;
              newTaskList[currentIndex].priority_level = tempPriorityLevel;
      
              // Add the index to the movedTasks set
              movedTasks.add(currentIndex);
            }
          }
        }
        const updatePriority = async () => {
            for (let task of newTaskList){
                await fetch(`http://localhost:3000/api/v1/tugas`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        id: task.id, 
                        title: task.title, 
                        status: task.status, 
                        comment: task.comment, 
                        priorityLevel: task.priority_level,
                        is_client_accepted: task.is_client_accepted
                    })
                })
            }
        }
        updatePriority()
        setTempTaskList(prev => newTaskList);
      }
            
    return (
       <div className="flex flex-col p-2">
            <table className="relative">
                {/* Header */}
                <thead>
                    <tr className="border border-b-2">
                        <th className="border-r">title</th>
                        <th className="border-r">Assigned</th>
                        <th className="border-r">Status</th>
                        <th className="border-r">Comment</th>
                        <th className="border-r">Acceptance</th>
                        <th className="border-r">Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((value, index) => (
                        <TaskRow 
                            taskData={value} 
                            key={`sorted-data-${value.id}-${index}`} 
                            onDelete={handleDeleteTask}
                            userRole={userRole}
                            onPriorityUpdate={handleTaskListPriority}
                            username={username}
                        />
                    ))}
                </tbody>
            </table>
            {   userRole !== "user" &&
                <div className="flex bg-orange-200 my-1 justify-between">
                    <button className="p-1 flex-1" onClick={handleAddTask}>+</button>
                </div>
            }
       </div>
    )
}