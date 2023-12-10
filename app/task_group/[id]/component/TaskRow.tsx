import TaskCell from "./TaskCell";

type TaskDataType = {
    title: string | null,
    assignedPerson: string[],
    status: string,
    comment: string | null
}

export default function TaskRow({ taskData }: {taskData: TaskDataType}) {
    return (
        <div className="flex py-2 w-screen border-b-2">
            <TaskCell data={taskData.title} />
            <TaskCell data={taskData.assignedPerson.at(0) ?? ""} />
            <TaskCell data={taskData.status} />
            <TaskCell data={taskData.comment} />
        </div>
    );
}
