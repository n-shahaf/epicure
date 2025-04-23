import styles from '@/components/Rating/Rating.module.scss'
import clsx from 'clsx'


type RatingProps = {
    rating: number
    max?: number
    className?: string
}

const Rating = ({ rating, max = 5, className }: RatingProps) => {
    const fullStars = '★'.repeat(rating)
    const emptyStars = '☆'.repeat(max - rating)
    return (
        <div className={clsx(styles.rating, className)}>{fullStars + emptyStars}</div>
    )
}
export default Rating