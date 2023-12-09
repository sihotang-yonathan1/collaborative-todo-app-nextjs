import { NextRequest, NextResponse } from "next/server";
import { addTugas } from "./tugas";

export async function POST(request: NextRequest) {
    const request_json = await request.json()
    const {title, status, comment, tugasListId} = request_json
    const response = await addTugas(title ?? null, status, comment, tugasListId)
    return new NextResponse(JSON.stringify(response))
}