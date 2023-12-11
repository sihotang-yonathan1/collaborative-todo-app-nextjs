import Link from "next/link";
import TaskList from "./component/TaskList";
import TaskSection from "./component/TaskSection";

export default function TaskPage({params}: {params: {id: number}}){
    const tugasListId = params.id ?? -1
    return (
        <div className="flex flex-col w-full h-screen">
            <div className="flex bg-sky-300 relative">
                <Link href="/task_group" className="justify-self-start bg-slate-500 px-2">
                    <button>Back</button>
                </Link>
                <div className="absolute left-1/2">
                    <p className="font-semibold">List Tugas</p>
                </div>
            </div>
           <TaskSection title="In Progress" tugasListId={tugasListId} status="in_progress"/>
           <TaskSection title="Finished" tugasListId={tugasListId} status="Finished"/>
        </div>
    )
}