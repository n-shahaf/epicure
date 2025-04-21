import styles from '@/components/Hero/Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <h1>Epicure works with the top</h1>
                    <h1>chef restaurants in Tel Aviv</h1>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder='Search for restaurant cuisine, chef' />
                </div>
            </div>
        </div>
    )
}
export default Hero