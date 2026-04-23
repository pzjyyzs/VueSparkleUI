export type ButtonKind = 'primary' | 'secondary' | 'tertiary' | 'dangerPrimary' | 'dangerSecondary' | 'dangerTertiary'

export type ButtonSize = 'sm' | 'md' | 'lg'

export interface SButtonProps {
    kind?: ButtonKind
    size?: ButtonSize
    disabled?: boolean
}