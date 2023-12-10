import TaskCell from "./TaskCell";

type TaskDataType = {
    title: string | null,
    assignedPerson: string[],
    status: string,
    comment: string | null
}

export default function TaskRow({ taskData }: {taskData: TaskDataType}) {
    return (
        <div className="grid grid-cols-4 py-2 w-screen border-b-2">
            <TaskCell data={taskData.title} isEditMode={false}/>
            <TaskCell data={taskData.assignedPerson.at(0) ?? ""} isEditMode={true}/>
            <TaskCell data={taskData.status} isEditMode={true}/>
            <TaskCell data={taskData.comment} isEditMode={true}/>
        </div>
    );
}
