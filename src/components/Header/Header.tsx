'use client'
import styles from '@/components/Header/Header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { useState } from 'react'
import HamburgerIcon from '@/assets/icons/HamburgerIcon.svg'
import SearchIcon from '@/assets/icons/SearchIcon.svg'
import UserIcon from '@/assets/icons/UserIcon.svg'
import BagIcon from '@/assets/icons/BagIcon.svg'
import Logo from '@/assets/icons/Logo.svg'
import CloseIcon from '@/assets/icons/CloseIcon.svg'
import Heading from '@/components/Heading/Heading'

export const navLinks = [{ address: '/restaurants', name: 'Restaurants' }, { address: '/chefs', name: 'Chefs' }]


const Header = () => {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const openNav = () => {
        setIsMenuOpen(true)
    }
    const closeNav = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <HamburgerIcon className={styles.menuIcon} onClick={openNav} />
                <Logo className={styles.logoIcon} onClick={() => router.push('/')} />
                <div className={styles.iconGroup}>
                    <SearchIcon />
                    <UserIcon />
                    <BagIcon />
                </div>
            </div>

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
        </header>
    )
}
export default Header