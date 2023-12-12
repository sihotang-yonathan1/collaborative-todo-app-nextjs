"use client"
import Link from "next/link";
import { useState } from "react";

export default function TaskGroupPreview({id, title}: {id: number, title: string}){
    const [isEditMode, setEditMode] = useState(false)
    const [tempProyek, setTempProyek] = useState({
        id: id,
        title: title
    })

    function handleProjectUpdate(title: string){
        setTempProyek(prev => ({
            ...prev,
            title: title
        }))
    }

    return (
        <div className="flex flex-col mx-2 bg-slate-500 p-1">
            <Link href={ isEditMode ? `#` : `/task_group/${id}`} className="flex flex-col p-2 bg-slate-400 mx-2 my-2">
                <div className="flex flex-col items-center">
                    {   isEditMode
                        ? <div contentEditable={isEditMode} onInput={e => handleProjectUpdate(e.currentTarget.textContent ?? "")}><p>{tempProyek.title}</p></div> 
                        : <p className="font-semibold capitalize">{title}</p>
                    }
                    {/* <p>{id}</p> */}
                </div>
            </Link>
            { isEditMode && <div className="flex flex-col mx-3">
                <button className="bg-orange-300" onClick={() => setEditMode(true)}>Edit</button>
                <button className="bg-red-400 my-1">Delete</button>
            </div>
            }
        </div>
    )
}