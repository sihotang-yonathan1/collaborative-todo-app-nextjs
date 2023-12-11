export default function TaskCellContainer({children}: {children: React.ReactNode}){
    return (
        <td className="text-center border-b border-l border-t">
            {children}
        </td>
    )
}