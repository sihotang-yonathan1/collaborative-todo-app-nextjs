"use client"

export default function TaskCell({ data, isEditMode = false}: { data: string | null, isEditMode: boolean }) {
    return (
        <div className="flex bg-slate-400 relative">
            <div className="mx-2">
                {   isEditMode
                    ? <div>
                        <input type="text" name="data" value={data ?? ""} className="p-2"/>
                        </div>
                    : <p>{data}</p>
                }
            </div>
        </div>
    );
}
