import { useEffect, useState } from "react";
import TaskCell from "./TaskCell";
import TaskStatusSelection from "./TaskStatusSelection";
import TaskAssignedColumn from "./TaskAssignedColumn";
import { useRouter } from "next/navigation";
import TaskClientAcceptance from "./TaskClientAcceptance";
import TaskCommentColumn from "./TaskCommentColumn";

type TaskDataType = {
    id: number,
    title: string | null,
    assignedPerson: string[],
    status: string,
    comment: string | null,
    priority_level: number | null,
    is_client_accepted: boolean | null
}

export default function TaskRow({ taskData , onDelete, userRole, username, onPriorityUpdate }: 
    {
        taskData: TaskDataType, 
        onDelete: (taskId: number) => void, 
        userRole: string,
        username: string,
        onPriorityUpdate: (tugas_id: number, action: "up" | "down") => void,
    }) {
    const [isEditMode, setEditMode] = useState(false)
    const [tempTaskData, setTempTaskData] = useState<TaskDataType>({
        id: taskData.id,
        title: taskData.title,
        assignedPerson: taskData.assignedPerson,
        status: taskData.status,
        comment: taskData.comment,
        priority_level: taskData.priority_level,
        is_client_accepted: taskData.is_client_accepted
    })
    const router = useRouter()

    function handleSingleValueEdit(key: string, value: unknown){
        // console.log(`${key}: ${value}`)
        setTempTaskData(prev => ({
            ...prev,
            [key]: value
        }))
    }

    function handleDeleteAssignedPerson(username: string){
        const deleteAssignedPerson = async () => {
            await fetch(`http://localhost:3000/api/v1/tugas_assign`, {
                method: "DELETE",
                credentials: "include",
                body: JSON.stringify({
                    tugasId: taskData.id,
                    username: username
                })
            })
        }
        deleteAssignedPerson()
    }

    function handleAssignedPersonValue(assignedPerson: string[]){
        const updateAssignedPerson = async () => {
            for (let person of assignedPerson){
                await fetch(`http://localhost:3000/api/v1/tugas_assign`, {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify({
                        tugasId: taskData.id,
                        username: person
                    })
                })
            }
        }
        updateAssignedPerson()
        setTempTaskData(prev => ({
            ...prev,
            assignedPerson: assignedPerson
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
                    comment: tempTaskData.comment,
                    priorityLevel: tempTaskData.priority_level,
                    acceptance: tempTaskData.is_client_accepted
                })
            })
            if (tempTaskData.status !== taskData.status){
                router.refresh()
            }
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
            <TaskAssignedColumn 
                assignedPerson={tempTaskData.assignedPerson}
                isEditMode={(userRole === "manager" || userRole == "admin" ) && isEditMode}
                onUpdate={handleAssignedPersonValue}
                onDelete={handleDeleteAssignedPerson}
                />
            <TaskStatusSelection
                currentValue={tempTaskData.status}
                onEdit={handleSingleValueEdit}
                isEditMode={(userRole !== "user") && isEditMode}
            />
            {/* <TaskCell 
                data={taskData.comment} 
                isEditMode={isEditMode} 
                onEdit={handleSingleValueEdit}
                taskKey="comment"
            /> */}
            
            <TaskCommentColumn taskDataId={taskData.id} isEditMode={isEditMode}/>

            <TaskClientAcceptance 
                isEditMode={
                    (userRole === "admin" || userRole === "user") 
                    && isEditMode
                } 
                currentValue={tempTaskData.is_client_accepted}
                onEdit={handleSingleValueEdit}
            />
            
            <td className={isEditMode ? "border grid grid-cols-2": "border flex flex-col"}>
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
                { (userRole === "admin" || userRole === "manager" ) && (isEditMode)
                    && <div className="flex flex-col items-center">
                    <div className="my-1">
                        <button className="bg-green-400 py-2 px-2 text-white" onClick={() => onPriorityUpdate(tempTaskData.id, "up")}>&uarr;</button>
                    </div>
                    <div className="mb-1">
                        <button className="bg-red-500 text-white py-2 px-2" onClick={() => onPriorityUpdate(tempTaskData.id, "down")}>&darr;</button>
                    </div>
                </div>
                }
            </td>
        </tr>
    );
}
