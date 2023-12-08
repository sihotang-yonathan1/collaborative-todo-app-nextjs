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
        'message': `@${username} successfully added`
    }
}

export async function deleteUser(username: string){
    await prisma.user.delete({
        where: {
            username: username
        }
    })

    return {
        'message': `@${username} account has successfully deleted`
    }
}