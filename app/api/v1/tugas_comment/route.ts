import { NextRequest, NextResponse } from "next/server";
import { addTugasComment, deleteTugasComment, getAllTugasComment, updateTugasComment } from "./tugas_comment";

export async function GET(request: NextRequest){
    const url_query = request.nextUrl.searchParams
    const tugas_id = url_query.get('tugas_id')
    let data;
    if (tugas_id !== null){
        data = await getAllTugasComment(Number(tugas_id))
    }
    return new NextResponse(JSON.stringify(data))
}

export async function POST(request: NextRequest) {
    const request_json = await request.json()
    const {tugasId, username, content} = request_json
    let response = await addTugasComment(Number(tugasId), username, content ?? "")
    return new NextResponse(JSON.stringify(response))
}

export async function PATCH(request: NextRequest){
    const request_json = await request.json()
    const {commentId, content} = request_json
    let response = await updateTugasComment(commentId, content)
    return new NextResponse(JSON.stringify(response))
}

export async function DELETE(request: NextRequest) {
    const request_json = await request.json()
    const {commentId} = request_json
    let response = await deleteTugasComment(commentId)
    return new NextResponse(JSON.stringify(response))
}