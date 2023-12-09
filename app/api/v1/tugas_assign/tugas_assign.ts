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