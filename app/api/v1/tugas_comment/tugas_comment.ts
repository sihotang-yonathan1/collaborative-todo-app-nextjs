import prisma from "@/app/utils/db_config";

export async function addTugasComment(tugas_id: number, username: string, content: string){
    await prisma.tugas_comment.create({
        data: {
            tugas_id: tugas_id,
            username: username,
            content: content
        }
    })
    return {
        'message': `@${username} successfully added comment to tugas id = ${tugas_id}`
    }
}

export async function updateTugasComment(commentId: number, newContent: string){
    await prisma.tugas_comment.update({
        data: {
            content: newContent
        },
        where: {
            id: commentId
        }
    })
    return {
        'message': `Comment with id=${commentId} successfully updated`
    }
}

export async function getAllTugasComment(tugas_id: number){
    return await prisma.tugas_comment.findMany({
        where: {
            tugas_id: tugas_id
        }
    })
}

export async function deleteTugasComment(commentId: number){
    await prisma.tugas_comment.delete({
        where: {
            id: commentId
        }
    })
}