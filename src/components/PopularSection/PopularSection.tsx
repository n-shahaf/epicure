import styles from '@/components/PopularSection/PopularSection.module.scss'
import { Restaurant } from "@/types"
import RightArrow from '@/assets/icons/RightArrowIcon.svg'
import Link from "next/link"
import Carousel from "@/components/Carousel/Carousel"
import { POPULAR_CONSTANT } from '@/constants/popular.constant'

type PopularSectionProps = {
    restaurants: Restaurant[]
}

const PopularSection = ({ restaurants }: PopularSectionProps) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>{POPULAR_CONSTANT.title}</h2>
            <Carousel slides={restaurants} type="restaurant" />
            <Link href="/restaurants" className={styles.link}>
                <span className={styles.text}>{POPULAR_CONSTANT.linkText}</span>
                <RightArrow className={styles.arrowIcon} />
            </Link>
        </div>
    )
}
export default PopularSection