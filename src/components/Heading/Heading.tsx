import clsx from 'clsx'
import styles from '@/components/Text/Text.module.scss'


type AsTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type StyleVariant = 'h1' | 'h2' | 'h3'

type HeadingProps = {
    variant: StyleVariant
    as?: AsTag
    children: React.ReactNode
    className?: string
}

const Heading = ({ variant, className, children, as }: HeadingProps) => {
    const HeadingTag = as || variant
    return (
        <HeadingTag className={clsx(styles.text, styles[variant], className)}>
            {children}
        </HeadingTag>
    )
}
export default Heading