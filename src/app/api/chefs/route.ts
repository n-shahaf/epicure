import { chefs } from '@/data/chefs.data'

export function GET() {
    return new Response(JSON.stringify(chefs), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}