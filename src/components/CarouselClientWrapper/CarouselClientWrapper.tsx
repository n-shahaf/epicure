'use client'
import CarouselSection from "@/components/CarouselSection/CarouselSection"
import { Restaurant, Dish } from "@/types"
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard"
import TEXT from "@/constants/text.constant"

//TODO: dish card
//TODO: dish Row data
//TODO: dish api

type CarouselClientWrapperProps = {
    restaurants: Restaurant[]
}

const CarouselClientWrapper = ({ restaurants }: CarouselClientWrapperProps) => {
    return (
        <>
            <CarouselSection<Restaurant>
                title={TEXT.HOME.POPULAR.title}
                linkText={TEXT.HOME.POPULAR.linkText}
                href={TEXT.HOME.POPULAR.href}
                slides={restaurants}
                renderSlide={(restaurant) => <RestaurantCard data={restaurant} />}
            />


            <CarouselSection<Restaurant>
                title={TEXT.HOME.DISH.title}
                linkText={TEXT.HOME.DISH.linkText}
                href={TEXT.HOME.DISH.href}
                slides={restaurants}
                renderSlide={(restaurant) => <RestaurantCard data={restaurant} />}
            />


        </>

    )
}
export default CarouselClientWrapper