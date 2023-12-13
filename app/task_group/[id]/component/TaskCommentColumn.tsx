"use client"

import { useContext, useEffect, useState } from "react";
import TaskCellContainer from "./TaskCellContainer";
import { UserContext } from "../provider/LoginProvider";

type CommentType = {
    id: number,
    tugas_id: number,
    username: string,
    content: string
}

export function TaskColumnSingular({content, user, isEditMode}: {content: string, user: string, isEditMode: boolean}){
    return (
        <div className="bg-orange-300 my-2 relative mx-1">
            {   isEditMode    
                ? <div contentEditable={true} suppressContentEditableWarning={true}></div>
                : <p>{content}</p>
            }
            <div className="flex justify-end">
                <p className="text-sm">{user}</p>
            </div>
            <div className="absolute top-0 right-0">
                <button>&times;</button>
            </div>
        </div>
    )
}

export default function TaskCommentColumn({taskDataId}: {taskDataId: number}){
    const [commentList, setCommentList] = useState<CommentType[]>([])
    const userInfo = useContext(UserContext)
    
    useEffect(() => {
        const getComment = async () => {
            const response = await fetch(
                `http://localhost:3000/api/v1/tugas_comment?tugas_id=${taskDataId}`)
            if (response.ok){
                setCommentList(await response.json())
            }
        }
        getComment()
    }, [taskDataId])

    return (
        <TaskCellContainer>
            <p>{taskDataId}</p>
            {/* @ts-ignore
            <p className="bg-slate-400">{userInfo?.userInfo?.username}</p> */}
            {
                commentList.map((value, _) => (
                    <TaskColumnSingular user={value.username} content={value.content} isEditMode={
                        // @ts-ignore
                        value.username === userInfo?.userInfo?.username
                        //@ts-ignore
                        || (userInfo?.userInfo?.username === "admin")
                    } key={value.id} />
                ))
            }
        </TaskCellContainer>
    )
}