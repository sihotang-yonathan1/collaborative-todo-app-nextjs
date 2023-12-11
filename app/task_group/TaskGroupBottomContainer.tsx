"use client"

import { useEffect, useState } from "react";
import AddTaskGroupDialog from "./AddTaskGroupDialog";

type UserInfo = {
    username: string,
    role: string
}

export default function TaskGroupBottomContainer({username}: {username: string}){
    const [isDialogOpen, setDialogOpen] = useState(false)
    const [userInfo, setUserInfo] = useState<UserInfo>()

    useEffect(() => {
        const firstFetch = async () => {
            let response = await fetch(
                `http://localhost:3000/api/v1/user?username=${username}`)
            if (response.ok){
                setUserInfo(await response.json())
            }
        }
        firstFetch()
    }, [username])

    function handleDialogOpen(value: boolean){
        setDialogOpen(_ => value)
    }
    return (
        <>  
            { userInfo?.role === "admin" &&
                <div className="absolute bottom-0 right-0 py-1 bg-sky-300 rounded-full px-3 m-1">
                    <button onClick={e => setDialogOpen(true)}>+</button>
                </div>
            }
            {  isDialogOpen 
                && <AddTaskGroupDialog onOpen={handleDialogOpen}/>
            }
        </>
    )
}