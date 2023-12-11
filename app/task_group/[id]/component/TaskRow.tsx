import { useEffect, useState } from "react";
import TaskCell from "./TaskCell";
import TaskStatusSelection from "./TaskStatusSelection";
import TaskAssignedColumn from "./TaskAssignedColumn";

type TaskDataType = {
    id: number,
    title: string | null,
    assignedPerson: string[],
    status: string,
    comment: string | null
}

export default function TaskRow({ taskData , onDelete, userRole }: 
    {
        taskData: TaskDataType, 
        onDelete: (taskId: number) => void, 
        userRole: string
    }) {
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

    function handleUpdate() {
        const updateFunction = async () => {
            await fetch(`http://localhost:3000/api/v1/tugas`, {
                method: "PATCH",
                body: JSON.stringify({
                    id: taskData.id,
                    title: tempTaskData.title,
                    status: tempTaskData.status,
                    comment: tempTaskData.comment
                })
            })
        }
        updateFunction()
    }

    useEffect(() => {
        console.log(tempTaskData)
    }, [tempTaskData])

    return (
        <tr>
            <TaskCell 
                data={taskData.title ?? ""} 
                isEditMode={userRole !== "user" && isEditMode} 
                onEdit={handleSingleValueEdit} 
                taskKey="title"
            />
            {/* <TaskCell 
                data={taskData.assignedPerson.at(0) ?? ""} 
                isEditMode={userRole !== "user" && isEditMode} 
                onEdit={handleSingleValueEdit}
                taskKey="assignedPerson"
            /> */}
            <TaskAssignedColumn 
                assignedPerson={tempTaskData.assignedPerson}
                isEditMode={(userRole === "manager" || userRole == "admin" ) && isEditMode}
                />
            <TaskStatusSelection
                currentValue={tempTaskData.status}
                onEdit={handleSingleValueEdit}
                isEditMode={isEditMode}
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
                                handleUpdate()
                                setEditMode(false)
                            }}
                          >Ok</button>
                        : <button className="bg-orange-300 my-1" onClick={() => setEditMode(true)}>Edit</button>
                    }
                    { userRole !== "user" 
                        && <button className="bg-red-400" onClick={() => onDelete(taskData.id)}>Delete</button>
                    }
                </div>
            </td>
        </tr>
    );
}
