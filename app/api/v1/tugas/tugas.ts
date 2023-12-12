import prisma from "../../../utils/db_config";

export async function addTugas(
    title: string | null, 
    status: string, 
    comment: string | null | undefined, 
    tugas_list_id: number, 
    {priority_level}: {priority_level: number | null}
    ){
    await prisma?.tugas.create({
        data: {
            title: title,
            status: status ?? 'in_progress',
            comment: comment,
            tugas_list_id: tugas_list_id,
            priority_level: priority_level ?? 9999
        }
    })

    return {
        'message': `Task ${title} successfully added`
    }
}

export async function updateTugas(
    tugas_id: number, 
    {title, status, priority_level, comment = null}: 
    {title?: string | null, status: string, priority_level: number | null, comment?: string | null}) {
    await prisma.tugas.update({
        where: {
            id: tugas_id
        },
        data: {
            title: title,
            status: status,
            comment: comment,
            priority_level: priority_level ?? 9999
        }
    })
    return {
        'message': `Task with id = ${tugas_id} successfully updated`
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