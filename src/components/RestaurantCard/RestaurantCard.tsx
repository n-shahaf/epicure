import styles from '@/components/RestaurantCard/RestaurantCard.module.scss'
import Heading from '@/components/Heading/Heading'
import { Restaurant } from '@/types'
import Image from 'next/image'
import Rating from '@/components/Rating/Rating'
import TEXT from '@/constants/text.constant'
import clsx from 'clsx'

const RestaurantCard = ({ data: restaurant, size }: { data: Restaurant, size?: 'small' }) => {
    return (
        <div className={clsx(styles.card, size && styles[size])}>
            <Image src={restaurant.imageUrl} alt={`${restaurant.name} ${TEXT.RESTAURANT_CARD.altText}`} width={335} height={207} />
            <div className={styles.content}>
                <Heading as='h2' variant='h3' className={styles.title}>{restaurant.name}</Heading>
                <Heading as='h3' variant='h2' className={styles.subTitle}>{restaurant.chefName}</Heading>
                <Rating rating={restaurant.rating} className={styles.rating} />
            </div>
        </div>
    )
}
export default RestaurantCard