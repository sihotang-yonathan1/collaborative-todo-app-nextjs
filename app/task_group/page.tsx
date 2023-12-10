import { cookies } from "next/headers";
import TaskGroupPreview from "./component/TaskGroupPreview";
import { getProyekByUsername } from "../api/v1/proyek/proyek";

type ProyekType = {
    id: number,
    title: string,
    username: string | null
}

export default async function TaskGroupPage(){
    const currentCookie = cookies()
    const username = currentCookie.get("username")?.value
    let proyekList: ProyekType[] = []
    if (username !== undefined){
        proyekList = await getProyekByUsername(username)
    }
    return (
        <div className="flex flex-col bg-orange-300 w-full h-screen justify-center">
            <div className="flex flex-col justify-center items-center self-center border p-2 m-2 bg-slate-200">
                <div>
                    <p className="font-semibold">Proyek</p>
                </div>
                <div className="grid grid-cols-5">
                    { proyekList.map((value) => (
                        <TaskGroupPreview id={value.id} key={value.id} title={value.title} />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}