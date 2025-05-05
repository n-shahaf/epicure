import styles from '@/app/restaurants/page.module.scss'
import SearchParamsList from '@/components/SearchParamsList/SearchParamsList'
import { getChefs } from '@/services/api.service'
import TEXT from '@/constants/text.constant'
import ChefList from '@/components/ChefList/ChefList'

const ChefsPage = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
    const params = await searchParams
    const chefs = await getChefs(params.q)
    const { endpoint, paramsList, title } = TEXT.CHEFS_PAGE


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <SearchParamsList endpoint={endpoint} paramsList={paramsList} />
            <ChefList chefs={chefs} />
        </div>
    )
}
export default ChefsPage

