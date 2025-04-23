import { chefs } from '@/data/chefs.data'
import { NextResponse } from 'next/server'

export function GET(_: Request, { params }: { params: { id: string } }) {

    const { id } = params
    const chefById = chefs.find(chef => chef.id.toString() === id)

    if (!chefById) return NextResponse.json({ error: 'Chef not found' }, { status: 404 })

    return NextResponse.json(chefById, { status: 200 })
}

