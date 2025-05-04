'use client'
import styles from '@/components/Header/NavBar.module.scss'
import HamburgerIcon from '@/assets/icons/HamburgerIcon.svg'
import SearchIcon from '@/assets/icons/SearchIcon.svg'
import UserIcon from '@/assets/icons/UserIcon.svg'
import BagIcon from '@/assets/icons/BagIcon.svg'
import Logo from '@/assets/icons/Logo.svg'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import TEXT from '@/constants/text.constant'

type NavBarProps = {
    openMenu: () => void
    toggleSearch: (state?: boolean) => void
    toggleCart: (state?: boolean) => void
}

const NavBar = ({ openMenu, toggleSearch, toggleCart }: NavBarProps) => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <>
            <nav className={clsx(styles.navbar)}>

                <button className={clsx(styles.btn, styles.menuButton)} onClick={openMenu} >
                    <HamburgerIcon className={styles.menuIcon} />
                </button>

                <div className={styles.logoGroup}>
                    <button className={clsx(styles.btn, styles.logoButton)} onClick={() => router.push('/')} >
                        <Logo className={styles.logoIcon} />
                        <span>{TEXT.HEADER.logoText}</span>
                    </button>
                    {TEXT.HEADER.links.map((link) => (
                        <Link key={link.name} href={link.path} className={clsx({ [styles.active]: pathname === link.path })}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className={styles.iconGroup}>
                    <button className={clsx(styles.btn, styles.searchButton)} onClick={() => toggleSearch()}>
                        <SearchIcon />
                    </button>

                    <button className={clsx(styles.btn, styles.userButton)}>
                        <UserIcon />
                    </button>

                    <button className={clsx(styles.btn, styles.bagButton)} onClick={() => toggleCart()}>
                        <BagIcon />
                    </button>
                </div>
            </nav>
        </>
    )
}
export default NavBar