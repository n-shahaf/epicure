
import styles from '@/app/restaurants/page.module.scss'
import SearchParamsList from '@/components/SearchParamsList/SearchParamsList'
import RestaurantList from '@/components/RestaurantList/RestaurantList'
import { getRestaurants } from '@/services/api.service'
import TEXT from '@/constants/text.constant'

//TODO: 

const RestaurantPage = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
    const params = await searchParams
    const restaurants = await getRestaurants(params.q)
    const { endpoint, paramsList, title } = TEXT.RESTAURANT_PAGE

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <SearchParamsList endpoint={endpoint} paramsList={paramsList} />
            <RestaurantList restaurants={restaurants} />
        </div>
    )
}
export default RestaurantPage







