import TaskRow from "./TaskRow"

export default function TaskList(){
    const taskData = [{
        title: "task 1",
        assignedPerson: ["Hello"],
        status: "active",
        comment: null
    }]
    return (
       <div className="flex flex-col p-2">
            <div className="flex flex-col relative">
                {/* Header */}
                <div className="flex w-full bg-slate-400 px-2 py-1">
                    <p className="flex-1">Name</p>
                    <p className="flex-1">Assign</p>
                    <p className="flex-1">Status</p>
                    <p className="flex-1">Comment</p>
                </div>
                {
                    taskData.map((value, index)=> (
                        <TaskRow
                            key={index}
                            title={value.title}
                            assignedPerson={value.assignedPerson}
                            status={value.status}
                            comment={value.comment}
                        />
                    ))
                }
            </div>
            <div className="bottom-0 bg-orange-200 my-1">
                <button className="p-1">+</button>
            </div>
       </div>
    )
}