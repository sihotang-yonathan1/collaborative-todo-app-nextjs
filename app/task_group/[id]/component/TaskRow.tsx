import TaskCell from "./TaskCell";

export default function TaskRow({ title, assignedPerson, status, comment }: { title: string; assignedPerson: string[]; status: string; comment: string | null; }) {
    return (
        <div className="flex py-2 w-screen border-b-2">
            <TaskCell data={title} />
            <TaskCell data={assignedPerson.at(0) ?? ""} />
            <TaskCell data={status} />
            <TaskCell data={comment} />
        </div>
    );
}
