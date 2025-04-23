import { chefs } from '@/data/chefs.data'
import { NextResponse } from 'next/server'

export function GET() {
    return NextResponse.json(chefs, { status: 200 })
}