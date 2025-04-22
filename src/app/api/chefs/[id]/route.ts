import { chefs } from '@/data/chefs.data'
export function GET(request: Request, { params }: { params: { id: string } }) {

    const { id } = params
    const chefById = chefs.find(chef => chef.id.toString() === id)

    if (!chefById) {
        return new Response(JSON.stringify({ error: 'Chef not found' }), {
            status: 404,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return new Response(JSON.stringify(chefById), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        }
    })

}

