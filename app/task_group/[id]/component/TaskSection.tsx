import TaskList from "./TaskList";

export default function TaskSection({title}: {title: string}){
    const taskData = [{
        title: "task 1",
        assignedPerson: ["Hello"],
        status: "active",
        comment: null
    }]
    return (
        <div className="my-2">
            <div className="flex flex-col justify-center items-center">
                <p className="font-semibold">{title}</p>
            </div>
            <TaskList taskData={taskData}/>
        </div>
    )
}