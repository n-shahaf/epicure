import { useEffect, useState } from "react"

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener("resize", handleResize)

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return isMobile
}

export default useIsMobile