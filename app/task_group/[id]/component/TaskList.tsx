"use client"

import { useState } from "react"
import TaskRow from "./TaskRow"

type TaskDataType = {
    title: string | null,
    assignedPerson: string[] | [],
    status: string,
    comment: string | null
}

export default function TaskList({taskData}: {taskData: TaskDataType[]}){
    const [tempTaskList, setTempTaskList] = useState<TaskDataType[]>(taskData)
    
    function handleAddTask(){
        setTempTaskList(prev => [
            ...prev,
            {
                title: null,
                assignedPerson: [],
                status: 'in_progress',
                comment: null
            }
        ])
    }

    return (
       <div className="flex flex-col p-2">
            <div className="flex flex-col relative">
                {/* Header */}
                <div className="flex w-full bg-slate-400 px-2 py-1">
                    <p className="flex-1">Name</p>
                    <p className="flex-1">Assign</p>
                    <p className="flex-1">Status</p>
                    <p className="flex-1">Comment</p>
                </div>
                {
                    tempTaskList.map((value, index)=> (
                        <TaskRow key={index} taskData={value}/>
                    ))
                }
            </div>
            <div className="bottom-0 bg-orange-200 my-1">
                <button className="p-1" onClick={handleAddTask}>+</button>
            </div>
       </div>
    )
}