export type InputSize = 'sm' | 'md' | 'lg'

export interface SInputProps {
    modelValue?: string
    placeholder?: string
    disabled?: boolean
    size?: InputSize
}

export interface SInputEmits {
    (e: 'update:modelValue', value: string): void
}