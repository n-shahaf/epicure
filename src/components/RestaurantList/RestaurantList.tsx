import styles from '@/components/RestaurantList/RestaurantList.module.scss'
import RestaurantCard from '@/components/RestaurantCard/RestaurantCard'

import { Restaurant } from "@/types"
type RestaurantListProps = {
    restaurants: Restaurant[],
}

const RestaurantList = ({ restaurants }: RestaurantListProps) => {
    return (
        <ul className={styles.list}>
            {restaurants.map((restaurant) => (
                <li key={restaurant.id} className={styles.listItem}>
                    <RestaurantCard data={restaurant} />
                </li>
            ))}
        </ul>
    )
}

export default RestaurantList