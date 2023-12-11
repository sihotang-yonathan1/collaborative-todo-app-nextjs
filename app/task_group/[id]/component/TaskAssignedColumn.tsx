"use client"

import { useEffect, useState } from "react";
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

type UserInfo = {
    username: string,
    role: string
}

export default function TaskAssignedColumn({assignedPerson, isEditMode, onUpdate, onDelete}: 
    {
        assignedPerson: string[], 
        isEditMode: boolean, 
        onUpdate: (assignedPerson: string[]) => void,
        onDelete: (username: string) => void
    }){
    const [tempAssignedPerson, setTempAssignedPerson] = useState(assignedPerson)
    const [allUserInfo, setAllUserInfo] = useState<UserInfo[]>([])
    const [tempCurrentAssignedPerson, setTempCurrentAssignedPerson] = useState("")
    
    useEffect(() => {
        const allUserInfo = async () => {
            let response = await fetch(`http://localhost:3000/api/v1/user`)
            if (response.ok){
                setAllUserInfo(
                    await response.json()
                )
            }
        }
        allUserInfo()
    }, [])

    function handleDeleteAssignedPerson(username: string){
        onDelete(username)
        setTempAssignedPerson(prev => prev.filter((value) => value !== username))
    }

    function handleAddAssignedPerson(username: string){
        if (allUserInfo.filter(
            (value) => value.username === username)
            .length !== 0){
                if (tempCurrentAssignedPerson !== ""){
                    setTempAssignedPerson(prev => [...prev, username])
                    onUpdate([...tempAssignedPerson, username])
                }
        }
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
                    <div className="flex justify-between">
                        <div 
                            contentEditable={true} 
                            suppressContentEditableWarning={true} 
                            className="border w-full mr-1"
                            onInput={e => setTempCurrentAssignedPerson(e.currentTarget.textContent ?? "")}>
                            <p></p>
                        </div>
                        <button 
                            className="bg-sky-500 flex px-1 justify-center" 
                            onClick={() => handleAddAssignedPerson(tempCurrentAssignedPerson)}
                        >+</button>
                    </div>
                }
                
            </div>
        </TaskCellContainer>
    )
}