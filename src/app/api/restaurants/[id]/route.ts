import { restaurants } from '@/data/restaurants.data'
export function GET(request: Request, { params }: { params: { id: string } }) {

    const { id } = params
    const restaurantById = restaurants.find(r => r.id.toString() === id)

    if (!restaurantById) {
        return new Response(JSON.stringify({ error: 'Chef not found' }), {
            status: 404,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return new Response(JSON.stringify(restaurantById), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        }
    })

}
