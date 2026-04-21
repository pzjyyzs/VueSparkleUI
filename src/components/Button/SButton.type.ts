export type ButtonType = 'primary' | 'outline'

export type ButtonSize = 'sm' | 'md' | 'lg'

export interface SButtonProps {
    type?: ButtonType
    size?: ButtonSize
    disabled?: boolean
}