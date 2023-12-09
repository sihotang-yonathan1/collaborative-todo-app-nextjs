import { NextRequest, NextResponse } from "next/server";
import { addTugas, deleteTugas } from "./tugas";

export async function POST(request: NextRequest) {
    const request_json = await request.json()
    const {title, status, comment, tugasListId} = request_json
    const response = await addTugas(title ?? null, status, comment, tugasListId)
    return new NextResponse(JSON.stringify(response))
}

export async function DELETE(request: NextRequest){
    const request_json = await request.json()
    const {tugasId} = request_json

    const response = await deleteTugas(tugasId)
    return new NextResponse(JSON.stringify(response))
}