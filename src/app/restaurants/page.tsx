
import styles from '@/app/restaurants/page.module.scss'
import SearchParamsList from '@/components/SearchParamsList/SearchParamsList'
import RestaurantList from '@/components/RestaurantList/RestaurantList'
import { getRestaurants } from '@/services/api.service'
import RestaurantFilters from '@/components/RestaurantFilters/RestaurantFilters'


const RestaurantPage = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
    const params = await searchParams
    const q = params.q || 'all'
    const restaurants = await getRestaurants(q)
    console.log('restaurants', restaurants)


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Restaurants</h1>
            <SearchParamsList />
            <RestaurantFilters />
            <RestaurantList restaurants={restaurants} />
        </div>
    )
}
export default RestaurantPage







