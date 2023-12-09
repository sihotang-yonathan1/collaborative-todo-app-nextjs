import prisma from "../../../utils/db_config";

export async function addTugasList(title: string, proyekId: number) {
    await prisma.tugas_list.create({
        data: {
            title: title,
            proyek_id: proyekId
        }
    })

    return {
        'message': `${title} has been added`
    }
}

export async function deleteTugasList(tugas_list_id: number){
    await prisma.tugas_list.delete({
        where: {
            id: tugas_list_id
        }
    })
    return {
        'message': `tugas_list with id=${tugas_list_id} successfully deleted`
    }
}