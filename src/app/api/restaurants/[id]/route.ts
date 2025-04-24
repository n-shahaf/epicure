import { restaurants } from '@/data/restaurants.data'
import delay from '@/utils/delay'
import { NextResponse } from 'next/server'


export function GET(_: Request, { params }: { params: { id: string } }) {
    delay(300)

    try {
        const { id } = params
        const restaurantById = restaurants.find(r => r.id.toString() === id)

        if (!restaurantById) return NextResponse.json({ message: 'Restaurant not found' }, { status: 404 })
        return NextResponse.json(restaurantById, { status: 200 })
    } catch (error) {
        console.log('Error fetching restaurant data', error)
        return NextResponse.json(
            { message: 'Error fetching restaurant data' },
            { status: 500 }
        )

    }





}
