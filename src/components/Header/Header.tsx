'use client'
import styles from '@/components/Header/Header.module.scss'
import { useCallback, useState } from 'react'
import NavBar from '@/components/Header/NavBar'
import MobileNav from '@/components/Header/MobileNav'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = useCallback((state: boolean) => setIsMenuOpen(state), [])

    return (
        <header className={styles.header}>
            <NavBar openMenu={() => toggleMenu(true)} />
            <MobileNav isMenuOpen={isMenuOpen} closeMenu={() => toggleMenu(false)} />
        </header>
    )
}
export default Header