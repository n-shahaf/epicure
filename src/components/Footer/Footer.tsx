import Link from "next/link"
import styles from "@/components/Footer/Footer.module.scss"
import TEXT from "@/constants/text.constant"

type FooterProps = {
    as?: 'footer' | 'div' | 'section'
}


const Footer = ({ as: Tag = 'footer' }: FooterProps) => {
    return (
        <Tag className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    {TEXT.FOOTER.links.map((link) => (
                        <li key={link.name} className={styles.navItem}>
                            <Link href={link.path}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Tag>
    )
}
export default Footer