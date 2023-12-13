import { cookies } from "next/headers";
import TaskGroupBottomContainer from "./TaskGroupBottomContainer";
import TaskGroupPreview from "./component/TaskGroupPreview";
import { getAllProyek } from "../api/v1/proyek/proyek";
import TaskGroupContainer from "./component/TaskGroupContainer";
import Header from "./layout_component/Header";

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
            <Header />
            <div className="relative">
                <div className="ml-3">
                    <p className="uppercase font-semibold text-3xl m-2">Let&lsquo;s get to work!</p>
                    <p className="uppercase font-semibold m-2">Pick your battlefield</p>
                </div>
                <div className="grid grid-cols-4 mx-3 my-4 gap-14">
                    {
                        proyekList.map((value, index) => (
                            <TaskGroupContainer key={value.id} title={value.title} id={value.id}/>
                        ))
                    }
                </div>
                <TaskGroupBottomContainer username={username ?? ""} />
                
            </div>
        </div>
    )
}