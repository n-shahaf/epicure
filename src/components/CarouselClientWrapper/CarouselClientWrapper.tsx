'use client'
import CarouselSection from "@/components/CarouselSection/CarouselSection"
import { Restaurant, Dish } from "@/types"
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard"
import TEXT from "@/constants/text.constant"
import DishCard from "../DishCard/DishCard"

//TODO: dish card

type CarouselClientWrapperProps = {
    restaurants: Restaurant[]
    dishes: Dish[]
}

const CarouselClientWrapper = ({ restaurants, dishes }: CarouselClientWrapperProps) => {
    return (
        <>
            <CarouselSection<Restaurant>
                title={TEXT.HOME.POPULAR.title}
                linkText={TEXT.HOME.POPULAR.linkText}
                href={TEXT.HOME.POPULAR.href}
                slides={restaurants}
                renderSlide={(restaurant) => <RestaurantCard data={restaurant} />}
            />


            <CarouselSection<Dish>
                title={TEXT.HOME.DISH.title}
                linkText={TEXT.HOME.DISH.linkText}
                href={TEXT.HOME.DISH.href}
                slides={dishes}
                renderSlide={(dish) => <DishCard dish={dish} />}
            />


        </>

    )
}
export default CarouselClientWrapper