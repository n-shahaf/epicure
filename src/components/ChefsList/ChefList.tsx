import styles from '@/components/RestaurantList/RestaurantList.module.scss'
import ChefCard from '@/components/ChefCard/ChefCard'

import { Chef } from "@/types"
type ChefListProps = {
    chefs: Chef[],
}

const ChefList = ({ chefs }: ChefListProps) => {
    return (
        <ul className={styles.list}>
            {chefs.map((chef) => (
                <li key={chef.id} className={styles.listItem}>
                    <ChefCard chef={chef} />
                </li>
            ))}
        </ul>
    )
}

export default ChefList