import { restaurants } from '@/data/restaurants.data'

export function GET() {
    return new Response(JSON.stringify(restaurants), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}