import styles from '@/components/AboutSection/AboutSection.module.scss'
import TEXT from '@/constants/text.constant'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <div className={styles.section}>
            <Image src={TEXT.ABOUT.logoSrc} alt={TEXT.ABOUT.logoAlt} width={102} height={95} className={styles.logo} />

            <div className={styles.content}>
                <div className={styles.storeButtons}>
                    <button className='icon-button-wrapper'>
                        <Image src={TEXT.ABOUT.appStoreSrc} alt={TEXT.ABOUT.appStoreAlt} width={180} height={52} className={styles.storeIcon} />
                    </button>
                    <button className='icon-button-wrapper'>
                        <Image src={TEXT.ABOUT.googleStoreSrc} alt={TEXT.ABOUT.googleStoreAlt} width={180} height={52} className={styles.storeIcon} />
                    </button>
                </div>
                <div className={styles.textContent}>
                    <h2 className={styles.heading}>{TEXT.ABOUT.title}</h2>
                    <p className={styles.text}>{TEXT.ABOUT.p1}</p>
                    <p className={styles.text}>{TEXT.ABOUT.p2}</p>
                </div>
            </div>


        </div>
    )
}
export default AboutSection