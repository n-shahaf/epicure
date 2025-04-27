import { VegetarianIcon } from '/icons/VegetarianIcon.svg'
export type Chef = {
    id: number
    name: string
    imageUrl: string
    views: number
    isNew: boolean
    description: string
    restaurants: string[] | Restaurant[] // restaurantRefIds populated to Restaurants[] durin api call
}

export type Restaurant = {
    id: number,
    imageUrl: string,
    name: string,
    chefName: string,
    isOpen: boolean,
    rating: 1 | 2 | 3 | 4 | 5,
    location: { lat: number, lng: number },
    isNew: boolean,
    isPopular: boolean,
    priceRange: { min: number, max: number },
    distance: number,
    menu: { breakfast: Dish[], lunch: Dish[], dinner: Dish[] },
}


export type Dish = {
    id: number,
    name: string,
    imageUrl: string,
    price: number,
    ingredients: string[],
    type: { name: string, iconUrl: string },
}


