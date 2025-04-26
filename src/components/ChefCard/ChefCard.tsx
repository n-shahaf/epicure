import styles from '@/components/ChefCard/ChefCard.module.scss'
import Image from 'next/image'
import { Chef } from '@/types'
import clsx from 'clsx'
type ChefCardProps = {
    chef: Chef
    className?: string
}
export const ChefCard = ({ chef, className }: ChefCardProps) => {
    return (
        <div className={clsx(styles.card, className)}>
            <Image src={chef.imageUrl} alt={`${chef.name} image`} className={styles.img} width={335} height={262} />
            <div className={styles.content}>
                <p className={styles.text}>{chef.name}</p>
            </div>
        </div>
    )
}