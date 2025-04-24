import styles from '@/components/Hero/Hero.module.scss'
import { HERO_CONSTANT } from '@/constants/hero.constant'

const Hero = () => {

    return (
        <div className={styles.heroSection}>
            <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <h1>{HERO_CONSTANT.title}</h1>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder={HERO_CONSTANT.placeholder} />
                </div>
            </div>
        </div>
    )
}

export default Hero