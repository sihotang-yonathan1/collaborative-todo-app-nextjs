import { cookies } from "next/headers"
import { getAllProyek } from "../api/v1/proyek/proyek"
import TaskGroupPage from "./page"

type ProyekType = {
    id: number,
    title: string,
}

export default async function TaskGroupLayout({children}:{children: React.ReactNode}) {
    const currentCookie = cookies()
    const username = currentCookie.get("username")?.value
    let proyekList: ProyekType[] = []
    if (username !== undefined){
        proyekList = await getAllProyek()
    }
    return (
        <div>
            <TaskGroupPage proyekList={proyekList}/>
        </div>
    )
}