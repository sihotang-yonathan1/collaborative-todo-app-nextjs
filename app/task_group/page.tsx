import TaskGroupPreview from "./component/TaskGroupPreview";

export default function TaskGroupPage(){
    return (
        <div className="flex flex-col bg-orange-300 w-full h-screen justify-center">
            <div className="flex flex-col justify-center items-center self-center border p-2 m-2 bg-slate-200">
                <div>
                    <p className="font-semibold">Proyek</p>
                </div>
                <div className="grid grid-cols-5">
                    <TaskGroupPreview title="world" id={1} />
                    <TaskGroupPreview title="world" id={1} />
                    <TaskGroupPreview title="world" id={1} />
                    <TaskGroupPreview title="world" id={1} />
                    <TaskGroupPreview title="world" id={1} />
                    <TaskGroupPreview title="world" id={1} />
                    <TaskGroupPreview title="world" id={1} />
                    <TaskGroupPreview title="world" id={1} />
                </div>
            </div>
        </div>
    )
}