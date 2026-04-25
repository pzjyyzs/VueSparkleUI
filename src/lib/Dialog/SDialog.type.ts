export type SparkleDialogAction = 'confirm' | 'cancel' | 'close'

export interface SDialogProps {
  isOpen?: boolean
  clickOutsideToClose?: boolean
  okText?: string
  cancelText?: string
  onOk?: () => boolean | void
  onCancel?: () => boolean | void
  onClose?: () => boolean | void
}

export interface SparkleDialogOpenOptions {
  title?: string
  content?: string
  okText?: string
  cancelText?: string
  clickOutsideToClose?: boolean
  onOk?: () => boolean | void
  onCancel?: () => boolean | void
  onClose?: () => boolean | void
}
