'use client'
import styles from '@/components/SearchParamsList/SearchParamsList.module.scss'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

type SearchParamsListProps = {
    endpoint: string
    paramsList: readonly string[]
}

const SearchParamsList = ({ endpoint, paramsList }: SearchParamsListProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentSearchParam = searchParams.get('q') || 'All'

    const handleClick = (param: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('q', param)
        router.push(`${endpoint}?${params.toString().toLowerCase()}`) // Update the URL
    }

    const isActive = (option: string) => {
        return currentSearchParam === option.toLowerCase()
    }

    return (
        <ul className={styles.list}>
            {paramsList.map((option) => (
                <li key={option} className={clsx(styles.listItem, isActive(option) && styles.active)}>
                    <button onClick={() => handleClick(option)}>{option}</button>
                </li>
            ))}
        </ul>
    )
}

export default SearchParamsList