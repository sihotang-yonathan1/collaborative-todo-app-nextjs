import Link from "next/link";
import TaskList from "./component/TaskList";
import TaskSection from "./component/TaskSection";
import TaskSectionList from "./component/TaskSectionList";

export default function TaskPage({params}: {params: {id: number}}){
    const tugasListId = params.id ?? -1
    return (
        <div className="flex flex-col w-full h-screen">
            <TaskSectionList tugasListId={tugasListId} />
        </div>
    )
}