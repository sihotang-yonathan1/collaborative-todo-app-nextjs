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