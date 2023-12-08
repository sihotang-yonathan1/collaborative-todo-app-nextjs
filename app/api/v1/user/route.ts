import { NextRequest, NextResponse } from "next/server";
import { addUser, deleteUser } from "./user";

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