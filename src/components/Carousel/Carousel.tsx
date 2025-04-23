'use client'
import styles from '@/components/Carousel/Carousel.module.scss'
import { Restaurant } from '@/types'
import useEmblaCarousel from 'embla-carousel-react'
import RestaurantCard from '@/components/RestaurantCard/RestaurantCard'

type CarouselProps = {
    slides: Restaurant[] | any[],
    type: 'restaurant' | 'dish'
}

const Carousel = ({ slides, type }: CarouselProps) => {

    const [emblaRef] = useEmblaCarousel({ dragFree: true })

    return (
        <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.carouselContainer}>
                {slides.map((item) => (
                    <div className={styles.carouselSlide} key={item.id}>
                        {type === 'restaurant'
                            ? <RestaurantCard data={item} />
                            :
                            <RestaurantCard data={item} />}
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Carousel