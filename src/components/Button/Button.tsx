'use client'
import styles from '@/components/Button/Button.module.scss'
import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary',
    className?: string,
    children: React.ReactNode,
    disabled?: boolean,
    flex?: boolean
}

const Button = ({ variant = 'primary', className, children, disabled = false, flex = false, ...rest }: ButtonProps) => {
    const combinedClassName = clsx(
        styles.button,
        styles[variant],
        flex && styles.flex,
        disabled && styles.disabled,
        className,
    )
    return (
        <button className={combinedClassName} {...rest}>{children}</button>
    )
}
export default Button