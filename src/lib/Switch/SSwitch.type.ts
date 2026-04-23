export type SwitchSize = 'sm' | 'md'
export type SwitchPlaceholder = 'left' | 'right'

export interface SSwitchProps {
  modelValue?: boolean
  disabled?: boolean
  size?: SwitchSize
  placeholder?: SwitchPlaceholder
}

export interface SSwitchEmits {
  (e: 'update:modelValue', value: boolean): void
}
