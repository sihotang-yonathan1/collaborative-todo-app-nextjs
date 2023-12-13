import { getTugasListAndAssignedPerson } from "@/app/api/v1/tugas_assign/tugas_assign";
import TaskSection from "./TaskSection";

export default async function TaskSectionList({tugasListId}:{tugasListId: number}){
    const taskList = await getTugasListAndAssignedPerson(Number(tugasListId))
    
    if (taskList.length > 0){
        return (
            <div>
                <TaskSection title="In Progress" tugasListId={tugasListId} status="in_progress"/>
                <TaskSection title="Finished" tugasListId={tugasListId} status="Finished"/>
                <TaskSection title="Active" tugasListId={tugasListId} status="active"/>
                <TaskSection title="Review" tugasListId={tugasListId} status="review"/>
            </div>
        )
    }
    else {
        return (
            <div className="flex w-full h-full flex-col justify-center items-center relative">
                <div>
                    <p>You didn&lsquo;t have any task</p>
                </div>
                <div className="absolute bottom-0 right-0 m-2">
                    <button className="m-1 bg-sky-400 px-3 py-2 rounded-full">+</button>
                </div>
            </div>
        )
    }
}