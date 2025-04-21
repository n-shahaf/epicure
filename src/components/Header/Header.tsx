'use client'
import styles from '@/components/Header/Header.module.scss'
import { useState } from 'react'
import NavBar from '@/components/Header/NavBar'
import MobileNav from '@/components/Header/MobileNav'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openNav = () => setIsMenuOpen(true)
    const closeNav = () => setIsMenuOpen(false)

    return (
        <header className={styles.header}>
            <NavBar openNav={openNav} />
            <MobileNav isMenuOpen={isMenuOpen} closeNav={closeNav} />
        </header>
    )
}
export default Header