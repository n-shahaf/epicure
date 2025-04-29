import styles from '@/components/DishCard/DishCard.module.scss'
import { Dish } from '@/types'
import Image from 'next/image'


type DishCardProps = {
    dish: Dish
}


const DishCard = ({ dish }: DishCardProps) => {
    return (
        <div className={styles.container}>
            <Image src={dish.imageUrl} alt={dish.name} width={272} height={173} className={styles.dishImage} />
            <div className={styles.details}>
                <h2 className={styles.title}>{dish.name}</h2>

                <div className={styles.type}>
                    {
                        <Image
                            src={dish.type.iconUrl}
                            alt={dish.name}
                            width={30}
                            height={24}
                            className={styles.iconImage}
                        />
                    }
                </div>
                <p className={styles.ingredients}>{dish.ingredients.join(', ')}</p>
                <div className={styles.price}>
                    <span className={styles.line} />
                    <span>&#8362;</span>{dish.price}
                    <span className={styles.line} />
                </div>
            </div>

        </div>
    )
}
export default DishCard