import prisma from "../../../utils/db_config";

export async function addTugas(
    title: string | null, 
    status: string, 
    comment: string | null | undefined, 
    tugas_list_id: number
    ){
    await prisma?.tugas.create({
        data: {
            title: title,
            status: status ?? 'in_progress',
            comment: comment,
            tugas_list_id: tugas_list_id
        }
    })

    return {
        'message': `Task ${title} successfully added`
    }
}

export async function deleteTugas(tugas_id: number){
    await prisma.tugas.delete({
        where: {
            id: tugas_id
        }
    })
    return  {
        'message': `Task with id=${tugas_id} successfully deleted`
    }
}

export async function getTugasByTugasTaskListId(tugas_list_id: number, {status = undefined}: {status: string | undefined}) {
    return await prisma.tugas.findMany({
        where: {
            tugas_list_id: Number(tugas_list_id),
            status: status
        }
    })
}