import { getChefById } from "@/services/api.service"
import { chefs } from "./chefs.data"
import { restaurants } from "./restaurants.data"
import { Chef, Dish, Restaurant } from "@/types"
import { dishes } from "./dishes.data"

type HomeData = {
    restaurants: Restaurant[]
    chefs: Chef[]
    dishes: Dish[]
    chefOfTheWeek: Chef
}

export const homeData: HomeData = {
    restaurants: restaurants,
    chefs: chefs,
    dishes: dishes,
    chefOfTheWeek: await getChefById('8') as Chef
}

