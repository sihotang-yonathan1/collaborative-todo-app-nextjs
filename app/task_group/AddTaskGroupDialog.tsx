"use client"

import { useState } from "react"

export default function AddTaskGroupDialog({onOpen}: {onOpen: (value: boolean) => void}) {
    const [projectName, setProjectName] = useState("")

    function handleAddProject(){
        const addProjectFunction = async () => {
            await fetch(`http://localhost:3000/api/v1/proyek`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    title: projectName
                })
            })
        }
        addProjectFunction()
    }

    return (
        <div className="absolute bg-slate-400 z-10 flex flex-col p-2 left-1/4">
            <div className="flex justify-center">
                <p className="font-semibold">Add Project</p>
            </div>
            <div className="flex justify-center my-2">
                <input 
                    type="text" 
                    name="project_title" 
                    id="project_title" 
                    placeholder="Project Name"
                    className="px-2 py-1"
                    onChange={e => setProjectName(e.target.value)}
                />
            </div>
            <div className="flex justify-between">
                <button onClick={_ => {
                    handleAddProject()
                    onOpen(false)
                }}>Add</button>
                <button onClick={_ => onOpen(false)}>Cancel</button>
            </div>
        </div>
    )
}