"use client"

import { useEffect, useState } from "react"
import TaskRow from "./TaskRow"
import TaskCell from "./TaskCell"

type TaskDataType = {
    id: number,
    title: string | null,
    assignedPerson: string[] | [],
    status: string,
    comment: string | null,
    priority_level: number | null
}

export default function TaskList({taskData, tugasListId, userRole}: {taskData: TaskDataType[], tugasListId: number, userRole: string}){
    const [tempTaskList, setTempTaskList] = useState<TaskDataType[]>(taskData)

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
                priority_level: prev.length
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

    const sortedData = tempTaskList.sort(
        (a, b) => (a.priority_level ?? 9999) < (b.priority_level ?? 9999) 
        ? -1 
        : (a.priority_level ?? 9999) < (b.priority_level ?? 9999)
            ? 0
            : 1)

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
                        <th className="border-r">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((value, index) => (
                        <TaskRow 
                            taskData={value} 
                            key={index} 
                            onDelete={handleDeleteTask}
                            userRole={userRole}
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