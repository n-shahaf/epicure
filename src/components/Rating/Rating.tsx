import styles from '@/components/Rating/Rating.module.scss'
import clsx from 'clsx'


type RatingProps = {
    rating: number
    className?: string
}

const Rating = ({ rating, className }: RatingProps) => {
    const max = 5
    const fullStars = '★'.repeat(rating)
    const emptyStars = '☆'.repeat(max - rating)
    return (
        <div className={clsx(styles.rating, className)}>{fullStars + emptyStars}</div>
    )
}
export default Rating