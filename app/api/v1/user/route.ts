import { NextRequest, NextResponse } from "next/server";
import { addUser } from "./user";

export async function POST(request: NextRequest){
    let request_json = await request.json()
    const {username, password, role} = request_json

    const response = await addUser(username, password, role)
    return new NextResponse(JSON.stringify(response))
}