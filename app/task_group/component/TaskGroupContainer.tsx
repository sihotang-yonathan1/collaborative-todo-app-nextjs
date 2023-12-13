import Link from "next/link"

export default function TaskGroupContainer({id, title}: {id: number, title: string}){
    return (
        <div className="bg-[#fe4b69] rounded-tl-md rounded-lg -rotate-1 mx-2 p-2 my-2 hover:bg-[#ff3657]">
            <Link href={`/task_group/${id}`}>
                <div className="rotate-1 p-3">
                    <p className="font-semibold capitalize">{title}</p>
                </div>
            </Link>
        </div>
    )
}