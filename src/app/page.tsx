import Hero from "@/components/Hero/Hero"
import PopularSection from "@/components/PopularSection/PopularSection"

const HomePage = async () => {
  const res = await fetch(`http://localhost:3000/api/home`)
  const homeData = await res.json()

  return (
    <div>
      <Hero />
      <PopularSection restaurants={homeData.restaurants} />
    </div>
  )
}
export default HomePage
