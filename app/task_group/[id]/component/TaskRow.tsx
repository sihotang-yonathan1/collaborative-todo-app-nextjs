import { useState } from "react";
import TaskCell from "./TaskCell";

type TaskDataType = {
    id: number,
    title: string | null,
    assignedPerson: string[],
    status: string,
    comment: string | null
}

export default function TaskRow({ taskData }: {taskData: TaskDataType}) {
    const [isEditMode, setEditMode] = useState(false)

    return (
        <tr>
            <TaskCell data={taskData.title ?? ""} isEditMode={isEditMode}/>
            <TaskCell data={taskData.assignedPerson.at(0) ?? ""} isEditMode={isEditMode} />
            <TaskCell data={taskData.status} isEditMode={isEditMode} />
            <TaskCell data={taskData.comment} isEditMode={isEditMode} />
            <td className="border">
                <div className="flex px-2 flex-col my-1">
                    {   isEditMode
                        ? <button 
                            className="bg-green-300 my-1"
                            onClick={() => {
                                setEditMode(false)
                            }}
                          >Ok</button>
                        : <button className="bg-orange-300 my-1" onClick={() => setEditMode(true)}>Edit</button>
                    }
                    <button className="bg-red-400">Delete</button>
                </div>
            </td>
        </tr>
    );
}
