"use client"

import { useState } from "react";
import TaskCellContainer from "./TaskCellContainer";

export function TaskAssignPersonContainer({username, onDelete, isEditMode}:{username: string, onDelete: (username: string) => void, isEditMode: boolean}){
    return (
        <div className="relative mx-2">
            <div className="bg-gray-300 rounded-full">
                <p className="text-sm">{username}</p>
            </div>
            {   isEditMode &&
                <div>
                    <button className="absolute bottom-0 right-0" onClick={() => onDelete(username)}>x</button>
                </div>
            }
        </div>
    )
}

export default function TaskAssignedColumn({assignedPerson, isEditMode}: {assignedPerson: string[], isEditMode: boolean}){
    const [tempAssignedPerson, setTempAssignedPerson] = useState(assignedPerson)
    function handleDeleteAssignedPerson(username: string){
        setTempAssignedPerson(prev => prev.filter((value) => value !== username))
    }

    return (
        <TaskCellContainer>
            <div className="flex flex-col relative h-full">
                {
                    tempAssignedPerson.map((value, index) => (
                        <div key={index} className="grid grid-cols-2 grid-rows-3">
                            <TaskAssignPersonContainer 
                                username={value} 
                                onDelete={handleDeleteAssignedPerson} 
                                isEditMode={isEditMode}/>
                        </div>
                    ))
                }
                {   isEditMode &&
                    <div className="absolute bottom-0 left-0 right-0">
                        <button className="bg-sky-500 flex w-full justify-center">+</button>
                    </div>
                }
                
            </div>
        </TaskCellContainer>
    )
}