import Hero from "@/components/Hero/Hero"
import IconSection from "@/components/IconSection/IconSection"
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
      <IconSection />
    </div>
  )
}
export default HomePage
