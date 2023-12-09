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