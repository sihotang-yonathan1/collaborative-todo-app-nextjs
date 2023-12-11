import { NextRequest, NextResponse } from "next/server";
import { addTugas, deleteTugas, getTugasByTugasTaskListId, updateTugas } from "./tugas";

type TugasType = {
    id: number,
    title: string | null,
    status: string | null,
    comment: string | null,
    tugas_list_id: number,
}

export async function GET(request: NextRequest) {
    const url_query = request.nextUrl.searchParams
    let data: TugasType[] = []
    if (url_query.has("tugas_list_id")){
        data = await getTugasByTugasTaskListId( Number(url_query.get('tugas_list_id')), {status: undefined}) ?? []
    }
    return new NextResponse(JSON.stringify(data))
}

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

export async function PATCH(request: NextRequest) {
    const request_json = await request.json()
    const {id, title, status, comment} = request_json
    const response = await updateTugas(id, {
        title: title,
        status: status,
        comment: comment
    })
    return new NextResponse(JSON.stringify(response))
}