"use client"

import TaskContainer from "./TaskCellContainer";

export default function TaskCell({ data, onEdit, taskKey, isEditMode = false}: 
    { data: string | null, isEditMode: boolean , taskKey: string, onEdit: (key: string, value: string) => void}) {
    return (
        <TaskContainer>
            <div contentEditable={isEditMode} suppressContentEditableWarning={true} onInput={e => onEdit(taskKey, e.currentTarget.textContent ?? "")}>
                {data ?? ""}
            </div>
        </TaskContainer>
    );
}
