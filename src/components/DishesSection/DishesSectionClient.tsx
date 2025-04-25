'use client'
import PopularSection from '../PopularSection/PopularSection'
// import DishCard from '../DishCard/DishCard'
// import TEXT from '@/constants/text.constant'
import { Dish } from '@/types'

type DishesSectionClientProps = {
    dishes: Dish[]
}

const DishesSectionClient = ({ dishes }: DishesSectionClientProps) => {
    return (
        <PopularSection<Dish>
            title="Popular Dishes"
            items={dishes}
            renderItem={(dish) => <div>{dish.name}</div>}
            linkText="See all dishes"
            linkHref="/dishes"
        />
    )
}

export default DishesSectionClient 