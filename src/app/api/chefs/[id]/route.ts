import { restaurants } from '@/data/restaurants.data'
import { chefs } from '@/data/chefs.data'
import { NextResponse } from 'next/server'
import delay from '@/utils/delay'
import { Restaurant } from '@/types'

export async function GET(_: Request, { params }: { params: { id: string } }) {
    await delay(300)
    try {
        const { id } = await params
        const chefById = chefs.find(chef => chef.id.toString() === id)
        if (!chefById) return NextResponse.json({ message: 'Chef not found' }, { status: 404 })

        // Populate chefRestaurants with restaurant data
        const chefRestaurantIds = chefById.restaurants as string[] // Ensure it's an array of strings
        chefById.restaurants = restaurants.filter(restaurant =>
            chefRestaurantIds.includes(restaurant.id.toString())
        ) as Restaurant[] // Cast to Restaurant[]

        return NextResponse.json(chefById, { status: 200 })

    } catch (error) {
        console.error('Error fetching chefs data', error)
        return NextResponse.json(
            { message: 'Error fetching chef data' },
            { status: 500 }
        )

    }



}

