"use client"
import { useState } from "react";
import TaskCellContainer from "./TaskCellContainer";

export default function TaskClientAcceptance({isEditMode}:{isEditMode: boolean}){
    const [isClientAccepted, setClientAccepted] = useState<boolean | null>(null)

    return (
        <TaskCellContainer>
            {   isEditMode
                ? <select 
                    onInput={
                        e => setClientAccepted(e.currentTarget.value === "accepted")
                    } 
                    value={
                        isClientAccepted  !== null 
                        ? isClientAccepted === true 
                            ? "accepted" : "rejected" 
                        : ""}
                    >
                    <option value="accepted">Accept</option>
                    <option value="rejected">Reject</option>
                    <option value="">N/A</option>
                </select>
                : <p>{isClientAccepted ? "accepted" : isClientAccepted === null ? "" : "rejected"}</p>
            }
        </TaskCellContainer>
    )
}