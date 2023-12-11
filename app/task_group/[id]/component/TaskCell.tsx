"use client"

export default function TaskCell({ data, isEditMode = false}: { data: string | null, isEditMode: boolean }) {
    return (
        <td className="text-center"><div contentEditable={isEditMode}>{data}</div></td>
    );
}
