import { chefs } from '@/data/chefs.data'
import { NextResponse } from 'next/server'
import delay from '@/utils/delay'

enum QueryOptions {
    ALL = 'all',
    NEW = 'new',
    MOST_VIEWED = 'most viewed',
}

export async function GET(request: Request) {
    await delay(300)
    const { searchParams } = new URL(request.url)
    const query = (searchParams.get('q') as QueryOptions) || QueryOptions.ALL
    let filteredChefs = chefs

    if (query) {
        switch (query) {
            case QueryOptions.NEW:
                filteredChefs = chefs.filter((chef) => chef.isNew)
                break
            case QueryOptions.MOST_VIEWED:
                filteredChefs = chefs.filter((chef) => chef.views > 300)
                break
            default:
                filteredChefs = chefs
                break
        }
    }
    try {
        return NextResponse.json(filteredChefs, { status: 200 })
    } catch (error) {
        console.error('Error fetching chefs data', error)
        return NextResponse.json(
            { message: 'Error fetching chefs data' },
            { status: 500 }
        )
    }


}