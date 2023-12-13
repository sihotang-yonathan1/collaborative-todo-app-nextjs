"use client"

import TaskCellContainer from "./TaskCellContainer";

export default function TaskStatusSelection({
    currentValue, isEditMode, onEdit}: 
    {currentValue: string, onEdit: (key: string, value: unknown) => void, isEditMode: boolean}) {
    
    return (
        <TaskCellContainer>
            {   isEditMode
                ? <select 
                    value={currentValue} 
                    onInput={
                        e => {
                            onEdit('status', e.currentTarget.value)
                            if (currentValue !== e.currentTarget.value){
                                onEdit("is_client_accepted", null)
                            }
                        }
                    }
                    className="p-1"
                  >
                    <option value="active">Active</option>
                    <option value="in_progress">In Progress</option>
                    <option value="finished">Finished</option>
                    <option value="review">Review</option>
                </select>
                : <p>{currentValue}</p>
            }
        </TaskCellContainer>
    )
}