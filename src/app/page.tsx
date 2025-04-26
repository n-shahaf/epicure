import AboutSection from "@/components/AboutSection/AboutSection"
import CarouselClientWrapper from "@/components/CarouselClientWrapper/CarouselClientWrapper"
import ChefSection from "@/components/ChefSection/ChefSection"
import Hero from "@/components/Hero/Hero"
import IconSection from "@/components/IconSection/IconSection"
import { getHomeData } from "@/services/api.service"

const HomePage = async () => {
  const homeData = await getHomeData()
  if (!homeData) {
    return <div>Error loading data</div>
  }

  return (
    <div>
      <Hero />
      <CarouselClientWrapper restaurants={homeData.restaurants} />
      <IconSection />
      <ChefSection chef={homeData.chefOfTheWeek} />
      <AboutSection />
    </div>
  )
}
export default HomePage
