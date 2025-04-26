import { getChefById } from "@/services/api.service"
import { chefs } from "./chefs.data"
import { restaurants } from "./restaurants.data"
import { Chef } from "@/types"

export const homeData = {
    restaurants: restaurants,
    chefs: chefs,
    chefOfTheWeek: await getChefById('8') as Chef
}

