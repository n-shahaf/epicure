'use client'
import styles from '@/components/SearchParamsList/SearchParamsList.module.scss'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import TEXT from '@/constants/text.constant'

const SearchParamsList = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentSearchParam = searchParams.get('q') || 'All'

    const handleClick = (param: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('q', param)
        router.push(`/restaurants?${params.toString().toLowerCase()}`) // Update the URL
    }

    const isActive = (option: string) => {
        return currentSearchParam === option.toLowerCase()
    }

    return (
        <ul className={styles.list}>
            {TEXT.RESTAURANT_PAGE.paramsList.map((option) => (
                <li key={option} className={clsx(styles.listItem, isActive(option) && styles.active)}>
                    <button onClick={() => handleClick(option)}>{option}</button>
                </li>
            ))}
        </ul>
    )
}

export default SearchParamsList