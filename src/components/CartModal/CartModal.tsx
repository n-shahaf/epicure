'use client'
import styles from '@/components/CartModal/CartModal.module.scss'
import BagIcon from '@/assets/icons/BagIcon.svg'
import clsx from 'clsx'
import Button from '../Button/Button'
import TEXT from '@/constants/text.constant'

type CartModalProps = {
    isOpen: boolean
}

const CartModal = ({ isOpen }: CartModalProps) => {
    const isEmpty = true //TODO This should be replaced with actual logic to check if the cart is empty
    return (
        <div className={clsx(styles.modal, isOpen && styles.open)}>
            {isEmpty ?
                (
                    <>
                        <BagIcon className={styles.CartBackground} />
                        <h2>{TEXT.CART_MODAL.title}</h2>
                        <Button variant='secondary' onClick={() => { console.log('Order History clicked!') }}>
                            {TEXT.CART_MODAL.buttonText}
                        </Button>
                    </>
                ) :
                <div>items</div>
            }

        </div>
    )
}
export default CartModal