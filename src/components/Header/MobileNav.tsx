import styles from '@/components/Header/MobileNav.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import CloseIcon from '@/assets/icons/CloseIcon.svg'
import TEXT from '@/constants/text.constant'
import Footer from '../Footer/Footer'

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
                {TEXT.HEADER.links.map((link) => (
                    <li key={link.name} className={styles.linkItem}>
                        <Link href={link.path}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Footer as='div' />
        </nav>
    )
}
export default MobileNav