'use client'
import styles from '@/components/PopularSection/PopularSection.module.scss'
import { Restaurant } from "@/types"
import RightArrow from '@/assets/icons/RightArrowIcon.svg'
import Link from "next/link"
import Carousel from "@/components/Carousel/Carousel"
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import TEXT from '@/constants/text.constant'

type PopularSectionProps = {
    restaurants: Restaurant[]
}

const PopularSection = ({ restaurants }: PopularSectionProps) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>{TEXT.HOME.POPULAR.title}</h2>
            <Carousel slides={restaurants} renderSlide={(restaurant) => <RestaurantCard data={restaurant} />} />
            <Link href={TEXT.HOME.POPULAR.href} className={styles.link}>
                <span className={styles.text}>{TEXT.HOME.POPULAR.linkText}</span>
                <RightArrow className={styles.arrowIcon} />
            </Link>
        </div>
    )
}
export default PopularSection