import styles from '@/components/Header/NavBar.module.scss'
import HamburgerIcon from '@/assets/icons/HamburgerIcon.svg'
import SearchIcon from '@/assets/icons/SearchIcon.svg'
import UserIcon from '@/assets/icons/UserIcon.svg'
import BagIcon from '@/assets/icons/BagIcon.svg'
import Logo from '@/assets/icons/Logo.svg'
import { useRouter } from 'next/navigation'

type NavBarProps = {
    openNav: () => void
}

const NavBar = ({ openNav }: NavBarProps) => {
    const router = useRouter()
    return (
        <nav className={styles.navbar}>
            <HamburgerIcon className={styles.menuIcon} onClick={openNav} />
            <Logo className={styles.logoIcon} onClick={() => router.push('/')} />
            <div className={styles.iconGroup}>
                <SearchIcon />
                <UserIcon />
                <BagIcon />
            </div>
        </nav>
    )
}
export default NavBar