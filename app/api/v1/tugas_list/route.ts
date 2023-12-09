import { NextRequest, NextResponse } from "next/server";
import { addTugasList, deleteTugasList } from "./tugas_list";

export async function POST(request: NextRequest){
    const request_json = await request.json()
    const {title, proyekId} = request_json

    const response = await addTugasList(title, proyekId)
    return new NextResponse(JSON.stringify(response))
}

export async function DELETE(request: NextRequest){
    const request_json = await request.json()
    const {tugasListId} = request_json

    const response = await deleteTugasList(tugasListId)
    return new NextResponse(JSON.stringify(response))
}