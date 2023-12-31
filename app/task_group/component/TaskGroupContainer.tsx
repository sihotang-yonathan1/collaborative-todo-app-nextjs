import Link from "next/link"

export default function TaskGroupContainer({id, title}: {id: number, title: string}){
    return (
        <div className="bg-[#8f8e8e] rounded-tl-md rounded-lg mx-2 p-2 my-2 hover:bg-[#ff3657]">
            <Link href={`/task_group/${id}`}>
                <div className="p-3 truncate hover:overflow-visible">
                    <p className="font-semibold capitalize">{title}</p>
                </div>
            </Link>
        </div>
    )
}