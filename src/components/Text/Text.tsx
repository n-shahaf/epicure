import styles from '@/components/Text/Text.module.scss'
import clsx from 'clsx'


type StyleVariant = 'h1' | 'h2' | 'h3'
type TagVariant = 'p' | 'div' | 'span'

type TextProps = {
    variant: StyleVariant
    as?: TagVariant
    children: React.ReactNode
    className?: string
}

const Text = ({ variant, className, children, as = 'p' }: TextProps) => {
    const Element = as || variant
    return (
        <Element className={clsx(styles.heading, styles[variant], className)}>
            {children}
        </Element>
    )
}

export default Text