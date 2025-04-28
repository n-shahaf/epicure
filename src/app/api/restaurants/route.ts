import { restaurants } from '@/data/restaurants.data'
import delay from '@/utils/delay'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    await delay(300)
    const { searchParams } = new URL(request.url)

    let filteredRestaurants = restaurants

    if (searchParams.has('q')) {
        const filter = searchParams.get('q')
        if (filter === 'most popular') {
            filteredRestaurants = restaurants.filter((restaurant) => restaurant.isPopular)
        } else if (filter === 'new') {
            filteredRestaurants = restaurants.filter((restaurant) => restaurant.isNew)
        } else if (filter === 'open now') {
            filteredRestaurants = restaurants.filter((restaurant) => restaurant.isOpen)
        }
    }

    try {
        return NextResponse.json(filteredRestaurants, { status: 200 })
    } catch (error) {
        console.log('Error fetching restaurants data', error)
        return NextResponse.json(
            { message: 'Error fetching restaurants data' },
            { status: 500 }
        )
    }

}
