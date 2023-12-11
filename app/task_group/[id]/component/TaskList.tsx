"use client"

import { useEffect, useState } from "react"
import TaskRow from "./TaskRow"
import TaskCell from "./TaskCell"

type TaskDataType = {
    title: string | null,
    assignedPerson: string[] | [],
    status: string,
    comment: string | null
}

export default function TaskList({taskData, tugasListId}: {taskData: TaskDataType[], tugasListId: number}){
    const [tempTaskList, setTempTaskList] = useState<TaskDataType[]>(taskData)
    const [ isEditMode, setEditMode] = useState(false)
    
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
                    tugasListId: 1  // TODO: set based on current task_group_id
                })
            })
        }
        addTaskFunction()

        setTempTaskList(prev => [
            ...prev,
            {
                title: "title",
                assignedPerson: ["hello"],
                status: 'in_progress',
                comment: "comment"
            }
        ])
        
    }

    function handleEditMode(value: boolean){
        console.log(`isEditmode: ${value}`)
        setEditMode(_ => value)
    }

    useEffect(() => {
        console.log(isEditMode)
    }, [isEditMode])

    return (
       <div className="flex flex-col p-2">
            <table className="relative">
                {/* Header */}
                <thead>
                <tr>
                    <th>title</th>
                    <th>Assigned</th>
                    <th>Status</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                    {tempTaskList.map((value, index) => (
                        <tr key={index}>
                            <TaskCell data={value.title ?? ""} isEditMode={isEditMode}/>
                            <TaskCell data={value.assignedPerson.at(0) ?? ""} isEditMode={isEditMode} />
                            <TaskCell data={value.status} isEditMode={isEditMode} />
                            <TaskCell data={value.comment} isEditMode={isEditMode} />
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex bg-orange-200 my-1 justify-between">
                <button className="p-1" onClick={handleAddTask}>+</button>
                {   isEditMode
                    ? <button onClick={() => handleEditMode(false)}>Ok</button>
                    : <button onClick={() => handleEditMode(true)}>Edit</button>
                }
            </div>
       </div>
    )
}