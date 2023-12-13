import Header from "./layout_component/Header";

export default function TaskGroupLayout({children}: {children: React.ReactNode}){
    return (
        <div className="flex flex-col">
            <Header />
            {children}
        </div>
    )
}