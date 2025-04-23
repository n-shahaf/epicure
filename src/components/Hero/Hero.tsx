import styles from '@/components/Hero/Hero.module.scss'
import { HeroContent } from '@/constants/hero.constant'

const Hero = () => {

    return (
        <div className={styles.heroSection}>
            <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <h1>{HeroContent.title}</h1>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder={HeroContent.placeholder} />
                </div>
            </div>
        </div>
    )
}
export default Hero