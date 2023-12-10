"use client"

import { useState } from "react"
import TaskRow from "./TaskRow"
import TaskCell from "./TaskCell"

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
                title: "",
                assignedPerson: ["hello"],
                status: 'in_progress',
                comment: "comment"
            }
        ])
    }

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
                            <td className="text-center"><div contentEditable={true}>{value.title}</div></td>
                            <td className="text-center"><div contentEditable={true}>{value.assignedPerson.at(0)}</div></td>
                            <td className="text-center"><div contentEditable={true}>{value.status}</div></td>
                            <td className="text-center"><div contentEditable={true}>{value.comment}</div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="bottom-0 bg-orange-200 my-1">
                <button className="p-1" onClick={handleAddTask}>+</button>
            </div>
       </div>
    )
}