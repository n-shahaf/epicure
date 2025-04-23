import { restaurants } from '@/data/restaurants.data'
import { NextResponse } from 'next/server'

export function GET() {
    return NextResponse.json(restaurants, { status: 200 })
}
