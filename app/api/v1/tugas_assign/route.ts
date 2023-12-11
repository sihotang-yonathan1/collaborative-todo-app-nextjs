import { NextRequest, NextResponse } from "next/server";
import { addTugasAssign, getTugasListAndAssignedPerson } from "./tugas_assign";

export async function GET(request: NextRequest) {
    const url_query = request.nextUrl.searchParams

    let data = await getTugasListAndAssignedPerson(
        Number(url_query.get('tugas_list_id')),
        url_query.get('status') ?? undefined
    )

    return new NextResponse(JSON.stringify(data))
}

export async function POST(request: NextRequest){
    let request_json = await request.json()
    const {tugasId, username} = request_json
    const response = await addTugasAssign(tugasId, username)
    return new NextResponse(JSON.stringify(response))
}