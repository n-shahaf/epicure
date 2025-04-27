'use client'
import styles from '@/components/Header/Header.module.scss'
import { useCallback, useState } from 'react'
import NavBar from '@/components/Header/NavBar'
import MobileNav from '@/components/Header/MobileNav'
import SearchModal from '@/components/SearchModal/SearchModal'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = useCallback((state: boolean) => setIsMenuOpen(state), [])
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <header className={styles.header}>
            <NavBar openMenu={() => toggleMenu(true)} setIsSearchOpen={setIsSearchOpen} />
            <MobileNav isMenuOpen={isMenuOpen} closeMenu={() => toggleMenu(false)} />
            <SearchModal isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />

        </header>
    )
}
export default Header