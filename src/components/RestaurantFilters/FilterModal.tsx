'use client'
import styles from '@/components/RestaurantFilters/FilterModal.module.scss'
import clsx from 'clsx'

type FilterModalProps = {
    option: { name: string, title: string }

}

const FilterModal = ({ option }: FilterModalProps) => {
    const { title, name } = option
    const variant = name.toLowerCase().split(' ')[0]

    return (
        <div className={clsx(styles.modal, styles[variant])}>
            <h3>{title}</h3>
            <div className={styles.price}>price</div>
            <div className={styles.distance}>distance</div>
            <div className={styles.rating}>rating</div>
        </div>
    )
}
export default FilterModal