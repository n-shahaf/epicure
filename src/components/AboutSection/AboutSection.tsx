import styles from '@/components/AboutSection/AboutSection.module.scss'
import TEXT from '@/constants/text.constant'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <div className={styles.section}>
            <Image src={TEXT.ABOUT.logo.src} alt={TEXT.ABOUT.logo.alt} width={102} height={95} className={styles.logo} />

            <div className={styles.content}>
                <div className={styles.storeButtons}>
                    {TEXT.ABOUT.storeIcons.map(icon => (
                        <button key={icon.src} className='icon-button-wrapper'>
                            <Image src={icon.src} alt={icon.alt} width={180} height={52} className={styles.storeIcon} />
                        </button>
                    ))}
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