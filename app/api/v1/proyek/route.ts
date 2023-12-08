import { NextRequest, NextResponse } from "next/server";
import { addProyek } from "./proyek";

export async function POST(request: NextRequest){
    const request_json = await request.json()
    const {title} = request_json

    let response = await addProyek(title)
    return new NextResponse(JSON.stringify(response))
}

