 export function TaskCell({data}: {data: string | null}){
    return (
        <div className="flex-1 px-1">
            <p>{data}</p>
        </div>
    )
}

export function ProjectRow({title, assignedPerson, status}: {title: string, assignedPerson: string[], status: string}){
    return (
        <div className="flex py-2 w-screen border-b-2" id="item " draggable="true">
            <TaskCell data={title}/>
            <TaskCell data={assignedPerson.at(0) ?? ""}/>
            <TaskCell data={status}/>
        </div>
    )
}

export default function ProjectList(){
    return (
       <div className="flex flex-col p-2">
            <div className="flex flex-col relative" id="sortable-list">
                {/* Header */}
                <div className="flex w-full bg-slate-400 px-2 py-1">
                    <p className="flex-1">Name</p>
                    <p className="flex-1">Assign</p>
                    <p className="flex-1">Status</p>
                </div>
                <ProjectRow
                    title="Task 1"
                    assignedPerson={["hello"]}
                    status="active"
                />
                <ProjectRow
                    title="Task 1"
                    assignedPerson={["hello"]}
                    status="active"
                />
            </div>
            <div className="bottom-0 bg-orange-200 my-1">
                <button className="p-1">+</button>
            </div>
       </div>
    )
}