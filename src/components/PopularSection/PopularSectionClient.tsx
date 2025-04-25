'use client'
import PopularSection from './PopularSection'
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import TEXT from '@/constants/text.constant'
import { Restaurant } from '@/types'

type PopularSectionClientProps = {
    restaurants: Restaurant[]
}

const PopularSectionClient = ({ restaurants }: PopularSectionClientProps) => {
    return (
        <PopularSection<Restaurant>
            title={TEXT.HOME.POPULAR.title}
            items={restaurants}
            renderItem={(restaurant) => <RestaurantCard data={restaurant} />}
            linkText={TEXT.HOME.POPULAR.linkText}
            linkHref={TEXT.HOME.POPULAR.href}
        />
    )
}

export default PopularSectionClient 