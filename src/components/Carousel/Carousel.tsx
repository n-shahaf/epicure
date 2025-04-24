'use client'
import styles from '@/components/Carousel/Carousel.module.scss'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

type CarouselProps<T> = {
    slides: T[],
    renderSlide: (item: T) => React.ReactNode
    options?: EmblaOptionsType
}

const Carousel = <T extends { id: string | number }>({ slides, renderSlide, options = { dragFree: true } }: CarouselProps<T>) => {
    const [emblaRef] = useEmblaCarousel(options)

    return (
        <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.carouselContainer}>
                {slides.map((item) => (
                    <div className={styles.carouselSlide} key={item.id}>
                        {renderSlide(item)}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Carousel