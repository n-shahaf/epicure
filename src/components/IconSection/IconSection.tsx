import styles from '@/components/IconSection/IconSection.module.scss'
import TEXT from '@/constants/text.constant'
import Image from 'next/image'
const IconSection = () => {
    return (
        <div className={styles.section}>
            <h2 className={styles.heading}>{TEXT.ICONS.heading}</h2>
            <ul className={styles.iconList}>
                {TEXT.ICONS.list.map((item) => (
                    <li key={item.name} className={styles.icon}>
                        <Image src={item.ImageSrc} alt={item.name} className={styles.iconImage} width={35} height={35} />
                        <h3 className={styles.iconName}>{item.name}</h3>
                    </li>

                ))}
            </ul>
        </div>
    )
}
export default IconSection