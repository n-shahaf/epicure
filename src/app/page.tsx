import Hero from "@/components/Hero/Hero"
import PopularSectionClient from "@/components/PopularSection/PopularSectionClient"
import DishesSectionClient from "@/components/DishesSection/DishesSectionClient"
import { getHomeData } from "@/services/api.service"

const HomePage = async () => {
  const homeData = await getHomeData()
  if (!homeData) {
    return <div>Error loading data</div>
  }

  return (
    <div>
      <Hero />
      <PopularSectionClient restaurants={homeData.restaurants} />
      <DishesSectionClient dishes={homeData.restaurants[0].menu.breakfast} />
    </div>
  )
}
export default HomePage
