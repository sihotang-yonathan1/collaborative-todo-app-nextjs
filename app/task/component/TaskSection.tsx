import TaskList from "./TaskList";

export default function TaskSection({title}: {title: string}){
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <p>{title}</p>
            </div>
            <TaskList />
        </>
    )
}