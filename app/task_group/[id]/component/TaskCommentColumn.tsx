"use client"

import { useCallback, useContext, useEffect, useState } from "react";
import TaskCellContainer from "./TaskCellContainer";
import { UserContext } from "../provider/LoginProvider";

type CommentType = {
    id: number,
    tugas_id: number,
    username: string,
    content: string
}

export function TaskColumnSingular({content, user, isEditMode, commentId, onDelete}: 
    {
        content: string, 
        user: string, 
        isEditMode: boolean,
        commentId: number, 
        onDelete: (commentId: number) => void
    }){
    const [tempContent, setTempContent] = useState(content)
    
    function handleCommentUpdate(commentId: number, content: string){
        console.log(`updating comment to database`)
        const updateCommentFuntion = async () => {
            await fetch(`http://localhost:3000/api/v1/tugas_comment`,{
                method: "PATCH",
                credentials: "include",
                body: JSON.stringify({
                    commentId: commentId,
                    content: content
                })
            })
        }
        setTempContent(_ => content)
        updateCommentFuntion()
    }

    return (
        <div className="bg-orange-300 my-2 relative mx-1">
            {   isEditMode    
                ? <div 
                    contentEditable={true} 
                    suppressContentEditableWarning={true}
                    onInput={e => handleCommentUpdate(commentId, e.currentTarget.textContent ?? "")}
                >
                    <p>{tempContent}</p>
                </div>
                : <p>{tempContent}</p>
            }
            <div className="flex justify-end">
                <p className="text-sm">{user}</p>
            </div>
            {   isEditMode &&
                <div className="absolute top-0 right-0">
                    <button onClick={e => onDelete(commentId)}>&times;</button>
                </div>
            }
        </div>
    )
}

export default function TaskCommentColumn({taskDataId, isEditMode}: {taskDataId: number, isEditMode: boolean}){
    const [commentList, setCommentList] = useState<CommentType[]>([])
    const [tempComment, setTempComment] = useState("")
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

    function handleAddComment(){
        const addCommentFunction = async () => {
            await fetch(`http://localhost:3000/api/v1/tugas_comment`,{
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    tugasId: taskDataId,
                    content: tempComment,
                    // @ts-ignore
                    username: userInfo?.userInfo.username,
                })
            })
        }
        addCommentFunction()
        setCommentList(prev => [...prev, {
            id: commentList.length + 1,
            tugas_id: taskDataId,
            content: tempComment,
            //@ts-ignore
            username: userInfo?.userInfo.username
            
        }])
    }

    function handleDeleteComment(commentId: number){
        const deleteFunction = async () => {
            await fetch(`http://localhost:3000/api/v1/tugas_comment`, {
                method: "DELETE",
                credentials: "include",
                body: JSON.stringify({
                    commentId: commentId
                })
            })
        }
        
        deleteFunction()
        let newCommentList: CommentType[] = []
        for (let data of commentList){
            if (data.id === commentId){
                continue
            }
            newCommentList.push(data)
        }
        setCommentList(newCommentList)
    }
   
    return (
        <TaskCellContainer>
            {
                commentList.map((value, _) => (
                    <TaskColumnSingular user={value.username} content={value.content} isEditMode={
                        (// @ts-ignore
                            value.username === userInfo?.userInfo?.username
                            //@ts-ignore
                            || (userInfo?.userInfo?.role === "admin")
                        ) && isEditMode
                    } key={value.id} onDelete={handleDeleteComment} commentId={value.id}/>
                ))
            }
            <div className="flex">
                <div 
                    contentEditable={true} 
                    className="w-full flex border mx-1 px-1" 
                    suppressContentEditableWarning={true}
                    onInput={e => {
                        setTempComment(e.currentTarget.textContent ?? "")
                        // handleCommentUpdate(taskDataId, e.currentTarget.textContent ?? "")
                    }}>
                    <p></p>
                </div>
                <div className="mx-1">
                    <button className="px-1 py-1 bg-sky-200" onClick={() => handleAddComment()}>+</button>
                </div>
            </div>
        </TaskCellContainer>
    )
}