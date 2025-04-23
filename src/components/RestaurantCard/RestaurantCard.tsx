import styles from '@/components/RestaurantCard/RestaurantCard.module.scss'
import Heading from '@/components/Heading/Heading'
import { Restaurant } from '@/types'
import Image from 'next/image'
import Rating from '@/components/Rating/Rating'

const RestaurantCard = ({ data: restaurant }: { data: Restaurant }) => {
    return (
        <div className={styles.card}>
            <Image src={restaurant.imageUrl} alt={`${restaurant.name} restaurant image`} width={335} height={207} />
            <div className={styles.content}>
                <Heading as='h2' variant='h3' className={styles.title}>{restaurant.name}</Heading>
                <Heading as='h3' variant='h2' className={styles.subTitle}>{restaurant.chefName}</Heading>
                <Rating rating={restaurant.rating} className={styles.rating} />
            </div>
        </div>
    )
}
export default RestaurantCard