import styles from '@/components/Header/MobileNav.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import CloseIcon from '@/assets/icons/CloseIcon.svg'

export const navLinks = [{ address: '/restaurants', name: 'Restaurants' }, { address: '/chefs', name: 'Chefs' }]

type MobileNavProps = {
    isMenuOpen: boolean
    closeNav: () => void
}

const MobileNav = ({ isMenuOpen, closeNav }: MobileNavProps) => {
    return (
        <nav className={clsx(styles.mobileNav, isMenuOpen && styles.open)}>
            <div className={styles.mobileNavHeader}>
                <CloseIcon className={styles.closeIcon} onClick={closeNav} />
            </div>
            <ul className={styles.linkList}>
                {navLinks.map((link) => (
                    <li key={link.name} className={styles.linkItem}>
                        <Link href={link.address}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default MobileNav