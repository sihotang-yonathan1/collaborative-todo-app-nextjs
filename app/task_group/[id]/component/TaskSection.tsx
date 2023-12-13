import { getTugasListAndAssignedPerson } from "@/app/api/v1/tugas_assign/tugas_assign";
import TaskList from "./TaskList";
import { cookies } from "next/headers";
import { getUserInfo } from "@/app/api/v1/user/user";

type TaskDataType = {
    id: number,
    title: string | null,
    assignedPerson: string[] | [],
    status: string,
    comment: string | null,
    priority_level: number | null
}

export default async function TaskSection({title, tugasListId, status}: {title: string, tugasListId: number, status: string}){
    const taskData2 = await getTugasListAndAssignedPerson(Number(tugasListId), status)
    let newTask: TaskDataType[] = taskData2.map(value => ({
        id: value.id,
        title: value.title,
        status: value.status ?? "",
        comment: value.comment,
        assignedPerson: value.tugas_assign.map(tugasAssignValue => tugasAssignValue.username),
        priority_level: value.priority_level
    }))

    // WARNING: may not be secure
    const currentCookie = cookies()
    const username = currentCookie.get("username")?.value ?? ""
    const userInfo = await getUserInfo(username ?? "")

    return (
        <div className="my-2">
            { newTask.length > 0 &&   
            <>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-semibold">{title}</p>
                </div>
                <TaskList 
                    taskData={newTask} 
                    tugasListId={tugasListId} 
                    userRole={userInfo?.role ?? "user"}
                    username={userInfo?.username ?? ""}
                />
            </>
            }
        </div>
    )
}