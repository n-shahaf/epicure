import { chefs } from '@/data/chefs.data'
import { NextResponse } from 'next/server'
import delay from '@/utils/delay'

export async function GET(_: Request, { params }: { params: { id: string } }) {
    await delay(300)
    try {
        const { id } = params
        const chefById = chefs.find(chef => chef.id.toString() === id)
        if (!chefById) return NextResponse.json({ message: 'Chef not found' }, { status: 404 })

        return NextResponse.json(chefById, { status: 200 })

    } catch (error) {
        console.error('Error fetching chefs data', error)
        return NextResponse.json(
            { message: 'Error fetching chef data' },
            { status: 500 }
        )

    }



}

