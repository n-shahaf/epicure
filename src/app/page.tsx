import Hero from "@/components/Hero/Hero"
import PopularSection from "@/components/PopularSection/PopularSection"
import { getHomeData } from "@/services/api.service"

const HomePage = async () => {
  const homeData = await getHomeData()
  if (!homeData) {
    return <div>Error loading data</div>
  }

  return (
    <div>
      <Hero />
      <PopularSection restaurants={homeData.restaurants} />
    </div>
  )
}
export default HomePage
