'use client'
import styles from '@/components/CarouselSection/CarouselSection.module.scss'
import RightArrow from '@/assets/icons/RightArrowIcon.svg'
import Link from "next/link"
import Carousel from "@/components/Carousel/Carousel"

type CarouselSectionProps<T extends { id: number | string }> = {
    title: string,
    linkText: string,
    href: string,
    slides: T[],
    renderSlide: (data: T) => React.ReactNode
}

const CarouselSection = <T extends { id: string | number }>({ slides, title, linkText, href, renderSlide }: CarouselSectionProps<T>) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <Carousel<T> slides={slides} renderSlide={renderSlide} />
            <Link href={href} className={styles.link}>
                <span className={styles.text}>{linkText}</span>
                <RightArrow className={styles.arrowIcon} />
            </Link>
        </div>
    )
}
export default CarouselSection