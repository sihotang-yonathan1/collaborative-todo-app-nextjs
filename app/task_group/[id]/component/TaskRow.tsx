import { useEffect, useState } from "react";
import TaskCell from "./TaskCell";

type TaskDataType = {
    id: number,
    title: string | null,
    assignedPerson: string[],
    status: string,
    comment: string | null
}

export default function TaskRow({ taskData , onDelete }: {taskData: TaskDataType, onDelete: (taskId: number) => void}) {
    const [isEditMode, setEditMode] = useState(false)
    const [tempTaskData, setTempTaskData] = useState<TaskDataType>({
        id: taskData.id,
        title: taskData.title,
        assignedPerson: taskData.assignedPerson,
        status: taskData.status,
        comment: taskData.comment
    })

    function handleSingleValueEdit(key: string, value: string){
        setTempTaskData(prev => ({
            ...prev,
            [key]: value
        }))
    }

    useEffect(() => {
        console.log(tempTaskData)
    }, [tempTaskData])

    return (
        <tr>
            <TaskCell 
                data={taskData.title ?? ""} 
                isEditMode={isEditMode} 
                onEdit={handleSingleValueEdit} 
                taskKey="title"
            />
            <TaskCell 
                data={taskData.assignedPerson.at(0) ?? ""} 
                isEditMode={isEditMode} 
                onEdit={handleSingleValueEdit}
                taskKey="assignedPerson"
            />
            <TaskCell 
                data={taskData.status} 
                isEditMode={isEditMode} 
                onEdit={handleSingleValueEdit}
                taskKey="status"
            />
            <TaskCell 
                data={taskData.comment} 
                isEditMode={isEditMode} 
                onEdit={handleSingleValueEdit}
                taskKey="comment"
            />
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
                    <button className="bg-red-400" onClick={() => onDelete(taskData.id)}>Delete</button>
                </div>
            </td>
        </tr>
    );
}
