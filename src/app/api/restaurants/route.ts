import { restaurants } from '@/data/restaurants.data'
import delay from '@/utils/delay'
import { NextResponse } from 'next/server'

export async function GET() {
    await delay(300)

    try {
        return NextResponse.json(restaurants, { status: 200 })
    } catch (error) {
        console.log('Error fetching restaurants data', error)
        return NextResponse.json(
            { message: 'Error fetching restaurants data' },
            { status: 500 }
        )
    }

}
