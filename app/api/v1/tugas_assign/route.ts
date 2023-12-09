import { NextRequest, NextResponse } from "next/server";
import { addTugasAssign } from "./tugas_assign";

export async function POST(request: NextRequest){
    let request_json = await request.json()
    const {tugasId, username} = request_json
    const response = await addTugasAssign(tugasId, username)
    return new NextResponse(JSON.stringify(response))
}