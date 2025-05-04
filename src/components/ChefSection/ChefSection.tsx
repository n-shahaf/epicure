'use client'
import styles from '@/components/ChefSection/ChefSection.module.scss'
import ChefCard from '../ChefCard/ChefCard'
import { Chef, Restaurant } from '@/types'
import TEXT from '@/constants/text.constant'
import Carousel from '../Carousel/Carousel'
import RestaurantCard from '../RestaurantCard/RestaurantCard'

type ChefSectionProps = {
    chef: Chef
}

const ChefSection = ({ chef }: ChefSectionProps) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.heading}>{TEXT.CHEF.title}</h2>
            <div className={styles.chefContent}>
                <ChefCard chef={chef} className={styles.card} />
                <p className={styles.description}>{chef.description}</p>
            </div>
            <div className={styles.carouselContainer}>
                <h3 className={styles.subHeading}>{`${chef.name.split(' ')[0]}'s restaurant`}</h3>
                <Carousel
                    slides={chef.restaurants as Restaurant[]}
                    renderSlide={(restaurant) => <RestaurantCard data={restaurant} size='small' />}
                />
            </div>

        </div>
    )
}
export default ChefSection