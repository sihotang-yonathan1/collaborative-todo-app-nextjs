"use client"

import { useEffect, useState } from "react"
import TaskRow from "./TaskRow"
import TaskCell from "./TaskCell"

type TaskDataType = {
    id: number,
    title: string | null,
    assignedPerson: string[] | [],
    status: string,
    comment: string | null
}

type TaskDataWithoutId = Omit<TaskDataType, 'id'>

export default function TaskList({taskData, tugasListId}: {taskData: TaskDataType[], tugasListId: number}){
    const [tempTaskList, setTempTaskList] = useState<TaskDataWithoutId[]>(taskData)
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
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {tempTaskList.map((value, index) => (
                        <tr key={index}>
                            <TaskCell data={value.title ?? ""} isEditMode={isEditMode}/>
                            <TaskCell data={value.assignedPerson.at(0) ?? ""} isEditMode={isEditMode} />
                            <TaskCell data={value.status} isEditMode={isEditMode} />
                            <TaskCell data={value.comment} isEditMode={isEditMode} />
                            <td>
                                <div className="flex px-2 flex-col">
                                    <button className="bg-orange-300 my-1">Edit</button>
                                    <button className="bg-red-400">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="flex bg-orange-200 my-1 justify-between">
                <button className="p-1" onClick={handleAddTask}>+</button>
            </button>
       </div>
    )
}