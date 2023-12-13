import { cookies } from "next/headers";
import TaskGroupBottomContainer from "./TaskGroupBottomContainer";
import TaskGroupPreview from "./component/TaskGroupPreview";
import { getAllProyek } from "../api/v1/proyek/proyek";
import TaskGroupContainer from "./component/TaskGroupContainer";

type ProyekType = {
    id: number,
    title: string,
}

export default async function TaskGroupPage(){
    const currentCookie = cookies()
    const username = currentCookie.get("username")?.value
    let proyekList: ProyekType[] = []
    if (username !== undefined){
        proyekList = await getAllProyek()
    }
    return (
        <div className="flex flex-col w-full h-screen relative bg-[#f2c7b4]">
            {/* <div className="flex flex-col justify-center items-center self-center border p-2 m-2 bg-slate-200 relative">
                <div>
                    <p className="font-semibold">Proyek</p>
                </div>
                <div className="grid grid-cols-5">
                    { proyekList.map((value) => (
                        <TaskGroupPreview id={value.id} key={value.id} title={value.title} />
                    ))}
                    
                </div>
                <TaskGroupBottomContainer username={username ?? ""}/>
            </div> */}
            <div>
                <p className="uppercase font-semibold text-2xl m-2">Let&lsquo;s get to work!</p>
                <p className="uppercase font-semibold m-2">Pick your battlefield</p>
                <div className="grid grid-cols-4 mx-3 my-4 gap-5">
                    {
                        proyekList.map((value, index) => (
                            <TaskGroupContainer key={value.id} title={value.title} id={value.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}