import Link from "next/link";

export default function TaskGroupPreview({id, title}: {id: number, title: string}){
    return (
        <Link href="/login" className="flex flex-col p-2 bg-slate-400 mx-2 my-2">
            <div className="flex flex-col">
                <p>{title}</p>
            </div>
        </Link>
    )
}