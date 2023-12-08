import TaskList from "./component/TaskList";
import TaskSection from "./component/TaskSection";

export default function TaskPage(){
    return (
        <div className="flex flex-col w-full h-screen">
           <TaskSection title="In Progress"/>
           <TaskSection title="Finished"/>
        </div>
    )
}