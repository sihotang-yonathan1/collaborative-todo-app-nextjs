import prisma from "../../../utils/db_config";

export async function addTugasAssign(tugas_id: number, username: string){
    await prisma.tugas_assign.create({
        data: {
            tugas_id: tugas_id,
            username: username
        }
    })
    return {
        'message': `Task with id=${tugas_id} successfully added`
    }
}

export async function getTugasListAndAssignedPerson(tugas_list_id: number, status: string | undefined = undefined){
    return await prisma.tugas.findMany({
        where: {
            status: status,
            tugas_list_id: tugas_list_id,
        },
        include: {
            tugas_assign: true
        }
    })
}

export async function deleteTugasAssignPerson(tugasId: number, username: string){
    await prisma.$executeRaw`
        DELETE FROM tugas_assign 
        WHERE tugas_id = ${tugasId} AND username = ${username}
    `
    return {
        'message': `@${username} is successfully deleted from tugas with id = ${tugasId}}`
    }
}