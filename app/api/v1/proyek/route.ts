import { NextRequest, NextResponse } from "next/server";
import { addProyek, getAllProyek, getProyekByUsername } from "./proyek";

export async function GET(request: NextRequest){
    const url_query = request.nextUrl.searchParams
    let data;
    if (url_query.has("proyekId")){
        data = {}
    }
    else if (url_query.has("username")){
        data = await getProyekByUsername(url_query.get("username") ?? "")
    }
    else {
        data = await getAllProyek()
    }
    return new NextResponse(JSON.stringify(data))
}

export async function POST(request: NextRequest){
    const request_json = await request.json()
    const {title} = request_json

    let response = await addProyek(title)
    return new NextResponse(JSON.stringify(response))
}

