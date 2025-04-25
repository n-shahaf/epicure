import styles from '@/components/Hero/Hero.module.scss'
import TEXT from '@/constants/text.constant'
const Hero = () => {

    return (
        <div className={styles.heroSection}>
            <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <h1>{TEXT.HOME.HERO.title}</h1>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder={TEXT.HOME.HERO.placeholder} />
                </div>
            </div>
        </div>
    )
}

export default Hero