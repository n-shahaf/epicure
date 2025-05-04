import styles from '@/app/chefs/page.module.scss'
import SearchParamsList from '@/components/SearchParamsList/SearchParamsList'
import { getChefs } from '@/services/api.service'
import TEXT from '@/constants/text.constant'

const ChefsPage = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
    const params = await searchParams
    const q = params.q || 'all'
    const chefs = await getChefs(q)
    const { endpoint, paramsList } = TEXT.CHEFS_PAGE


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{TEXT.CHEFS_PAGE.title}</h1>
            <SearchParamsList endpoint={endpoint} paramsList={paramsList} />
            {/* <C restaurants={restaurants} /> */}
        </div>
    )
}
export default ChefsPage

