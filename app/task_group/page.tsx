import TaskGroupPreview from "./component/TaskGroupPreview";

type ProyekType = {
    id: number,
    title: string,
}

export default async function TaskGroupPage({proyekList}: {proyekList: ProyekType[]}){
    return (
        <div className="flex flex-col bg-orange-300 w-full h-screen justify-center relative">
            <div className="flex flex-col justify-center items-center self-center border p-2 m-2 bg-slate-200 relative">
                <div>
                    <p className="font-semibold">Proyek</p>
                </div>
                <div className="grid grid-cols-5">
                    { proyekList.map((value) => (
                        <TaskGroupPreview id={value.id} key={value.id} title={value.title} />
                    ))}
                    
                </div>
                <div className="absolute bottom-0 right-0 py-1 bg-sky-300 rounded-full px-3 m-1">
                    <button>+</button>
                </div>

                <div className="absolute bg-slate-400 z-10 flex flex-col p-2 left-1/4">
                    <div className="flex justify-center">
                        <p className="font-semibold">Add Project</p>
                    </div>
                    <div className="flex justify-center my-2">
                        <input type="text" name="project_title" id="project_title" placeholder="Project Name"/>
                    </div>
                    <div className="flex justify-between">
                        <button>Add</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}