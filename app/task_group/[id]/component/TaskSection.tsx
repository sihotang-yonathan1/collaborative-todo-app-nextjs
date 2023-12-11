import { getTugasListAndAssignedPerson } from "@/app/api/v1/tugas_assign/tugas_assign";
import TaskList from "./TaskList";

type TaskDataType = {
    id: number,
    title: string | null,
    assignedPerson: string[] | [],
    status: string,
    comment: string | null
}

export default async function TaskSection({title, tugasListId, status}: {title: string, tugasListId: number, status: string}){
    const taskData2 = await getTugasListAndAssignedPerson(Number(tugasListId), status)
    let newTask: TaskDataType[] = taskData2.map(value => ({
        id: value.id,
        title: value.title,
        status: value.status ?? "",
        comment: value.comment,
        assignedPerson: value.tugas_assign.map(tugasAssignValue => tugasAssignValue.username)
    }))

    return (
        <div className="my-2">
            <div className="flex flex-col justify-center items-center">
                <p className="font-semibold">{title}</p>
            </div>
            <TaskList taskData={newTask} tugasListId={tugasListId}/>
        </div>
    )
}