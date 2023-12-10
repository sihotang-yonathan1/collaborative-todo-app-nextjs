export default function TaskCell({ data }: { data: string | null; }) {
    return (
        <div className="flex-1 px-1">
            <p>{data}</p>
        </div>
    );
}
