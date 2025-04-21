'use client'
import styles from '@/components/Header/NavBar.module.scss'
import HamburgerIcon from '@/assets/icons/HamburgerIcon.svg'
import SearchIcon from '@/assets/icons/SearchIcon.svg'
import UserIcon from '@/assets/icons/UserIcon.svg'
import BagIcon from '@/assets/icons/BagIcon.svg'
import Logo from '@/assets/icons/Logo.svg'
import { useRouter } from 'next/navigation'

type NavBarProps = {
    openMenu: () => void
}

const NavBar = ({ openMenu }: NavBarProps) => {
    const router = useRouter()
    return (
        <nav className={styles.navbar}>
            <button className='icon-button-wrapper' onClick={openMenu} >
                <HamburgerIcon className={styles.menuIcon} />
            </button>
            <button className='icon-button-wrapper' onClick={() => router.push('/')} >
                <Logo className={styles.logoIcon} />
            </button>
            <div className={styles.iconGroup}>
                <button className='icon-button-wrapper'>
                    <SearchIcon />
                </button>
                <button className='icon-button-wrapper'>
                    <UserIcon />Í
                </button>
                <button className='icon-button-wrapper'>
                    <BagIcon />
                </button>
            </div>
        </nav>
    )
}
export default NavBar