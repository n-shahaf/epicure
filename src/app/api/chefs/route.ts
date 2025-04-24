import { chefs } from '@/data/chefs.data'
import { NextResponse } from 'next/server'
import delay from '@/utils/delay'

export async function GET() {
    await delay(300)

    try {
        return NextResponse.json(chefs, { status: 200 })
    } catch (error) {

        console.error('Error fetching chefs data', error)
        return NextResponse.json(
            { message: 'Error fetching chefs data' },
            { status: 500 }
        )
    }


}