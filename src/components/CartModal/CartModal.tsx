'use client'
import styles from '@/components/CartModal/CartModal.module.scss'
import BagIcon from '@/assets/icons/BagIcon.svg'
import clsx from 'clsx'
type CartModalProps = {
    isOpen: boolean
    toggleModal: (state: boolean) => void
}

const CartModal = ({ isOpen }: CartModalProps) => {

    return (
        <div className={clsx(styles.modal, isOpen && styles.open)}>
            <BagIcon className={styles.CartBackground} />
            <h2>Your bag is empty</h2>
        </div>
    )
}
export default CartModal