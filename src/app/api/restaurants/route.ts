import { restaurants } from '@/data/restaurants.data'
import delay from '@/utils/delay'
import { NextResponse } from 'next/server'

enum QueryOptions {
    MOST_POPULAR = 'most popular',
    NEW = 'new',
    OPEN_NOW = 'open now',
    ALL = 'all',
}

export async function GET(request: Request) {
    await delay(300)
    const { searchParams } = new URL(request.url)
    const query = (searchParams.get('q') as QueryOptions) || QueryOptions.ALL
    let filteredRestaurants = restaurants

    if (query) {
        switch (query) {
            case QueryOptions.MOST_POPULAR:
                filteredRestaurants = restaurants.filter((restaurant) => restaurant.isPopular)
                break
            case QueryOptions.NEW:
                filteredRestaurants = restaurants.filter((restaurant) => restaurant.isNew)
                break
            case QueryOptions.OPEN_NOW:
                filteredRestaurants = restaurants.filter((restaurant) => restaurant.isOpen)
                break
            default:
                break
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
