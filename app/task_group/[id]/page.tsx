import Link from "next/link";
import TaskList from "./component/TaskList";
import TaskSection from "./component/TaskSection";
import TaskSectionList from "./component/TaskSectionList";
import LoginProvider from "./provider/LoginProvider";
import { cookies } from "next/headers";
import { getUserInfo } from "@/app/api/v1/user/user";

export default async function TaskPage({params}: {params: {id: number}}){
    const tugasListId = params.id ?? -1
    const currentCookie = cookies()
    const username = currentCookie.get("username")?.value ?? ""
    const userInfo = await getUserInfo(username ?? "")
    return (
        <div className="flex flex-col w-full h-screen">
            <div className="flex bg-sky-300 relative p-2">
                <Link href="/task_group" className="justify-self-start bg-slate-500 px-2">
                    <button className="text-white">&larr;</button>
                </Link>
                <div className="absolute left-1/2">
                    <p className="font-semibold">List Tugas</p>
                </div>
            </div>
            <LoginProvider userDetails={userInfo}>
                <TaskSectionList tugasListId={tugasListId} />
            </LoginProvider>
        </div>
    )
}