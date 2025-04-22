import styles from '@/components/Header/MobileNav.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import CloseIcon from '@/assets/icons/CloseIcon.svg'
import { NAV_LINKS } from '@/constants/header.constant'

type MobileNavProps = {
    isMenuOpen: boolean
    closeMenu: () => void
}

const MobileNav = ({ isMenuOpen, closeMenu }: MobileNavProps) => {
    return (
        <nav className={clsx(styles.mobileNav, isMenuOpen && styles.open)}>
            <div className={styles.mobileNavHeader}>
                <button className='icon-button-wrapper' onClick={closeMenu}>
                    <CloseIcon className={styles.closeIcon} />
                </button>
            </div>
            <ul className={styles.linkList}>
                {NAV_LINKS.map((link) => (
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