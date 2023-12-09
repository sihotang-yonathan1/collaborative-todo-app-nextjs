import TaskList from "./TaskList";

export default function TaskSection({title}: {title: string}){
    return (
        <div className="my-2">
            <div className="flex flex-col justify-center items-center">
                <p className="font-semibold">{title}</p>
            </div>
            <TaskList />
        </div>
    )
}