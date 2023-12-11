import TaskList from "./component/TaskList";
import TaskSection from "./component/TaskSection";

export default function TaskPage({params}: {params: {id: number}}){
    const tugasListId = params.id ?? -1
    return (
        <div className="flex flex-col w-full h-screen">
           <TaskSection title="In Progress" tugasListId={tugasListId} status="in_progress"/>
           <TaskSection title="Finished" tugasListId={tugasListId} status="Finished"/>
        </div>
    )
}