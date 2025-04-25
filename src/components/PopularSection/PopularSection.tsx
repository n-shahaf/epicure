'use client'
import styles from '@/components/PopularSection/PopularSection.module.scss'
import RightArrow from '@/assets/icons/RightArrowIcon.svg'
import Link from "next/link"
import Carousel from "@/components/Carousel/Carousel"

type PopularSectionProps<T extends { id: string | number }> = {
    title: string
    items: T[]
    renderItem: (item: T) => React.ReactNode
    linkText: string
    linkHref: string
}

const PopularSection = <T extends { id: string | number }>({ 
    title, 
    items, 
    renderItem, 
    linkText, 
    linkHref 
}: PopularSectionProps<T>) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <Carousel slides={items} renderSlide={renderItem} />
            <Link href={linkHref} className={styles.link}>
                <span className={styles.text}>{linkText}</span>
                <RightArrow className={styles.arrowIcon} />
            </Link>
        </div>
    )
}
export default PopularSection