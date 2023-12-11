"use client"

export default function TaskCell({ data, onEdit, taskKey, isEditMode = false}: 
    { data: string | null, isEditMode: boolean , taskKey: string, onEdit: (key: string, value: string) => void}) {
    return (
        <td className="text-center border-b border-l border-t">
            <div contentEditable={isEditMode} suppressContentEditableWarning={true} onInput={e => onEdit(taskKey, e.currentTarget.textContent ?? "")}>
                {data ?? ""}
            </div>
        </td>
    );
}
