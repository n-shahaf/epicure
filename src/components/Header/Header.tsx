'use client'
import styles from '@/components/Header/Header.module.scss'
import { useCallback, useState } from 'react'
import NavBar from '@/components/Header/NavBar'
import MobileNav from '@/components/Header/MobileNav'
import SearchModal from '@/components/SearchModal/SearchModal'
import CartModal from '@/components/CartModal/CartModal'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const createToggleHandler = useCallback((setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        return (state?: boolean) => {
            if (typeof state === 'boolean') {
                setter(state)
            } else {
                setter(prev => !prev)
            }
        }
    }, [])


    const toggleMenu = useCallback(createToggleHandler(setIsMenuOpen), [createToggleHandler])
    const toggleSearch = useCallback(createToggleHandler(setIsSearchOpen), [createToggleHandler])
    const toggleCart = useCallback(createToggleHandler(setIsCartOpen), [createToggleHandler])

    return (
        <header className={styles.header}>
            <NavBar
                openMenu={() => toggleMenu(true)}
                toggleSearch={toggleSearch}
                toggleCart={toggleCart}
            />
            <MobileNav
                isMenuOpen={isMenuOpen}
                closeMenu={() => toggleMenu(false)}
            />
            <SearchModal
                isOpen={isSearchOpen}
                toggleSearch={toggleSearch}
            />
            <CartModal
                isOpen={isCartOpen}
            />
        </header>
    )
}
export default Header