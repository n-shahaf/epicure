import Link from "next/link"
import styles from "@/components/Footer/Footer.module.scss"
import { FOOTER_LINKS } from "@/constants/footer.constant"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    {FOOTER_LINKS.map((link) => (
                        <li key={link.name} className={styles.navItem}>
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