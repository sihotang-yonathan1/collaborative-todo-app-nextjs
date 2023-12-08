import prisma from "../../../utils/db_config";

export async function addUser(username: string, password: string, role: string){
    await prisma.user.create({
        data: {
            username: username,
            password: password,
            role: role
        }
    })
    return {
        'message': `${username} successfully added`
    }
}