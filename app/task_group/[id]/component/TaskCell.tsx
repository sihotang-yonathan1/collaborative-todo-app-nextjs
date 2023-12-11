"use client"

export default function TaskCell({ data, isEditMode = false}: { data: string | null, isEditMode: boolean }) {
    return (
        <td className="text-center border-b border-l border-t"><div contentEditable={isEditMode}>{data}</div></td>
    );
}
