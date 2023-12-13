"use client"
import { useState } from "react";
import TaskCellContainer from "./TaskCellContainer";

export default function TaskClientAcceptance({currentValue, isEditMode, onEdit}:
    {   currentValue: boolean | null, 
        isEditMode: boolean,
        onEdit: (key: string, value: unknown) => void
    }){
    // console.log(`currentValue: ${currentValue}`)
    const [isClientAccepted, setClientAccepted] = useState<boolean | null>(currentValue)
    // console.log(isClientAccepted)
    return (
        <TaskCellContainer>
            {   isEditMode
                ? <select 
                    onInput={
                        e => {
                            setClientAccepted(e.currentTarget.value === "no_answer" ? null : e.currentTarget.value === "accepted")
                            onEdit("is_client_accepted", e.currentTarget.value === "no_answer" ? null : e.currentTarget.value === "accepted")
                            if (e.currentTarget.value === "rejected"){
                                onEdit("status", "in_progress")
                            }
                        }
                    } 
                    value={
                        isClientAccepted === null 
                        ? "no_answer"
                        : (
                            isClientAccepted === true 
                            ? "accepted"
                            : "rejected"
                        )
                    }
                    >
                    <option value="accepted">Accept</option>
                    <option value="rejected">Reject</option>
                    <option value="no_answer">No Answer</option>
                </select>
                : <p>{
                    isClientAccepted === null
                    ? "No Answer"
                    : isClientAccepted === true
                        ? "accepted"
                        : "rejected"    
                }</p>
            }
        </TaskCellContainer>
    )
}