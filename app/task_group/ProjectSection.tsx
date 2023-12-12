import ProjectList from "./ProjectList";

export default function ProjectSection({title}: {title: string}){
    return (
        <div className="my-2">
            <div className="flex flex-col justify-center items-center">
                <p className="text-left p-2 font-bold text-xl">{title}</p>
            </div>
            <ProjectList />
        </div>
    )
}