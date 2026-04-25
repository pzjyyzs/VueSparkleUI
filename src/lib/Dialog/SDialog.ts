import { h, render } from 'vue'
import type { SparkleDialogAction, SparkleDialogOpenOptions } from './SDialog.type'
import SDialog from './SDialog.vue'

export function openDialog(options: SparkleDialogOpenOptions) {
  return new Promise<SparkleDialogAction>((resolve) => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    let settled = false

    const cleanup = () => {
      render(null, container)
      container.remove()
    }

    const finish = (action: SparkleDialogAction) => {
      if (settled) return
      settled = true
      cleanup()
      resolve(action)
    }

    const handleConfirm = () => {
      if (options.onOk?.() !== false) {
        finish('confirm')
      }
      return false
    }

    const handleCancel = () => {
      if (options.onCancel?.() !== false) {
        finish('cancel')
      }
      return false
    }

    const handleClose = () => {
      if (options.onClose?.() !== false) {
        finish('close')
      }
      return false
    }

    const vnode = h(
      SDialog,
      {
        isOpen: true,
        clickOutsideToClose: options.clickOutsideToClose ?? true,
        okText: options.okText,
        cancelText: options.cancelText,
        onOk: handleConfirm,
        onCancel: handleCancel,
        onClose: handleClose,
        'onUpdate:isOpen': (value: boolean) => {
          if (!value) {
            handleClose()
          }
        },
      },
      {
        title: () => h('h2', { class: 'sparkle-dialog__title' }, options.title ?? 'Confirm'),
        content: () => h('p', null, options.content ?? ''),
      },
    )

    render(vnode, container)
  })
}
