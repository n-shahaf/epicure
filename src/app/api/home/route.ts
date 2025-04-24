import { homeData } from "@/data/home.data"
import delay from "@/utils/delay"
import { NextResponse } from 'next/server'

export async function GET() {
    await delay(300)
    try {
        return NextResponse.json(homeData, { status: 200 })
    } catch (error) {
        console.error('Error fetching home data', error)
        return NextResponse.json(
            { message: 'Error fetching home data' },
            { status: 500 }
        )

    }

}