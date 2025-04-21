import Link from "next/link"
import styles from "@/components/Footer/Footer.module.scss"
import { footerLinks } from "@/components/Footer/Footer.constant"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    {footerLinks.map((link, index) => (
                        <li key={index} className={styles.navItem}>
                            <Link href={link.path}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    )
}
export default Footer