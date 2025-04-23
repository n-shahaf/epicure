import { homeData } from "@/data/home.data"
import { NextResponse } from 'next/server'

export function GET() {
    return NextResponse.json(homeData, { status: 200 })
}