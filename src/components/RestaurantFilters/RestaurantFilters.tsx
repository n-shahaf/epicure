'use client'
import styles from '@/components/RestaurantFilters/RestaurantFilters.module.scss'
import TEXT from '@/constants/text.constant'
import DownArrowIcon from '@/assets/icons/DownArrowIcon.svg'
import Button from '@/components/Button/Button'
import clsx from 'clsx'
import { useState } from 'react'
import FilterModal from '@/components/RestaurantFilters/FilterModal'

type Filters = {
    price: number | null
    distance: number | null
    rating: number | null
}

const initialFilters: Filters = {
    price: null,
    distance: null,
    rating: null,
}

const RestaurantFilters = () => {
    const [filters, setFilters] = useState<Filters>(initialFilters)

    const handleFilterChange = (filter: keyof Filters, value: number | null) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filter]: value }))
    }
    const handleResetFilters = () => {
        setFilters(initialFilters)
    }


    return (
        <ul className={styles.list}>
            {TEXT.RESTAURANT_PAGE.filters.map((option) => (
                <li key={option.name} className={clsx(styles.listItem, styles.open)}>
                    <Button
                        variant='clear'
                        flex={true}>
                        {option.name} <DownArrowIcon />
                    </Button>
                    <FilterModal
                        title={option.title}
                        option={option}
                    />
                </li>

            ))}

        </ul>
    )
}
export default RestaurantFilters