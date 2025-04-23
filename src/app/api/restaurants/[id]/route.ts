import { restaurants } from '@/data/restaurants.data'
import { NextResponse } from 'next/server'


export function GET(_: Request, { params }: { params: { id: string } }) {

    const { id } = params
    const restaurantById = restaurants.find(r => r.id.toString() === id)

    if (!restaurantById) return NextResponse.json({ error: 'Restaurant not found' }, { status: 404 })

    return NextResponse.json(restaurantById, { status: 200 })
}
