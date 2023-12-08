import { NextRequest, NextResponse } from "next/server";
import { checkLogin } from "./auth";

export async function POST(request: NextRequest){
    let request_json = await request.json()
    const username = request_json["username"]
    const password = request_json["password"]

    let data = await checkLogin(username, password)

    return new NextResponse(JSON.stringify(data))
}