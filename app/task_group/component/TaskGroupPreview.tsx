import Link from "next/link";

export default function TaskGroupPreview({id, title}: {id: number, title: string}){
    return (
        <Link href={`/task_group/${id}`} className="flex flex-col p-2 bg-slate-400 mx-2 my-2">
            <div className="flex flex-col items-center">
                <p className="font-semibold capitalize">{title}</p>
                <p>{id}</p>
            </div>
        </Link>
    )
}