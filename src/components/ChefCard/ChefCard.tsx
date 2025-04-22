import styles from '@/components/ChefCard/ChefCard.module.scss'
import Image from 'next/image'

type ChefCardProps = {
    chef: { name: string, imgUrl: string }
}
export const ChefCard = ({ chef }: ChefCardProps) => {
    return (
        <div className={styles.card}>
            <Image src={chef.imgUrl} alt={`${chef.name} image`} className={styles.img} width={335} height={262} />
            <div className={styles.content}>
                <p className={styles.text}>{chef.name}</p>
            </div>
        </div>
    )
}