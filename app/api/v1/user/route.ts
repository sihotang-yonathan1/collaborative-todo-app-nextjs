import { NextRequest, NextResponse } from "next/server";
import { addUser, deleteUser, getAllUserInfo, getUserInfo, updateUser } from "./user";

export async function GET(request: NextRequest){
    const url_query = request.nextUrl.searchParams
    const url_query_object = Object.fromEntries(url_query)
    if (url_query.get("username") !== null){
        const data = await getUserInfo(url_query_object.username)
        return new NextResponse(JSON.stringify(data))
    }
    else {
        return new NextResponse(JSON.stringify(
            await getAllUserInfo()
        ))
    }
}

export async function POST(request: NextRequest){
    let request_json = await request.json()
    const {username, password, role} = request_json

    const response = await addUser(username, password, role)
    return new NextResponse(JSON.stringify(response))
}

export async function DELETE(request: NextRequest){
    let request_json = await request.json()
    const {username} = request_json

    const response = await deleteUser(username)
    return new NextResponse(JSON.stringify(response))
}

export async function PATCH(request: NextRequest){
    const request_json = await request.json()
    const {username, password, role} = request_json

    const response = await updateUser(username, password, role)
    return new NextResponse(JSON.stringify(response))
}