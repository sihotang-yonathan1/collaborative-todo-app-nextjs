import prisma from "../../../utils/db_config";

export async function checkLogin(username: string, password: string){
    // TODO: handling error
    let data = await prisma.user.findFirst({
        select: {
            username: true,
            role: true
        },
        where: {
            username: username,
            password: password
        }
    })
    return data
}