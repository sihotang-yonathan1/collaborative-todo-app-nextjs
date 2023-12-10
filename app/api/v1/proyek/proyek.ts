import prisma from "../../../utils/db_config";

export async function getAllProyek(){
    return prisma.proyek.findMany({
        select: {
            id: true,
            title: true
        }
    })
}

export async function addProyek(title: string){
    await prisma.proyek.create({
        data: {
            title: title
        }
    })
    return {
        'message': `project ${title} successfully added`
    }
}