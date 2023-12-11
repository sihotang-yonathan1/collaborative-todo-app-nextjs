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
                id: prev.length + 1,
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
                    <tr className="border border-b-2">
                        <th className="border-r">title</th>
                        <th className="border-r">Assigned</th>
                        <th className="border-r">Status</th>
                        <th className="border-r">Comment</th>
                        <th className="border-r">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tempTaskList.map((value, index) => (
                        <TaskRow taskData={value} key={index}/>
                    ))}
                </tbody>
            </table>
            <div className="flex bg-orange-200 my-1 justify-between">
                <button className="p-1 flex-1" onClick={handleAddTask}>+</button>
            </div>
       </div>
    )
}