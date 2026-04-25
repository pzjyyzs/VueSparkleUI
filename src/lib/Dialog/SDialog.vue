<script lang="ts" setup>
import SButton from '../Button/SButton.vue'
import type { SDialogProps } from './SDialog.type'

const props = withDefaults(defineProps<SDialogProps>(), {
  isOpen: false,
  clickOutsideToClose: true,
  okText: 'OK',
  cancelText: 'Cancel',
})
const emit = defineEmits(['update:isOpen'])

const okAction = () => {
  if (props.onOk?.() !== false) {
    emit('update:isOpen', false)
  }
}

const cancelAction = () => {
  if (props.onCancel?.() !== false) {
    emit('update:isOpen', false)
  }
}

const closeAction = () => {
  if (props.onClose?.() !== false) {
    emit('update:isOpen', false)
  }
}

const overlayCloseAction = () => {
  if (props.clickOutsideToClose) {
    closeAction()
  }
}
</script>

<template>
  <template v-if="props.isOpen">
    <Teleport to="body">
      <div class="sparkle-dialog-layer">
        <div class="sparkle-overlay" @click="overlayCloseAction"></div>

        <div class="sparkle-wrapper">
          <div class="sparkle-dialog" role="dialog" aria-modal="true">
            <button
              type="button"
              class="sparkle-dialog__close"
              aria-label="Close dialog"
              @click="closeAction"
            >
              <span aria-hidden="true">×</span>
            </button>

            <header class="sparkle-dialog__header">
              <slot name="title">
                <h2 class="sparkle-dialog__title">Dialog Title</h2>
              </slot>
            </header>

            <main class="sparkle-dialog__content">
              <slot name="content"></slot>
            </main>

            <footer class="sparkle-dialog__footer">
              <SButton kind="secondary" @click="cancelAction">{{ props.cancelText }}</SButton>
              <SButton kind="primary" @click="okAction">{{ props.okText }}</SButton>
            </footer>
          </div>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<style lang="scss">
.sparkle-dialog-layer {
  position: fixed;
  inset: 0;
  z-index: 1200;
}

.sparkle-overlay {
  position: absolute;
  inset: 0;
  background: rgba(17, 17, 17, 0.28);
  backdrop-filter: blur(2px);
}

.sparkle-wrapper {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
}

.sparkle-dialog {
  pointer-events: auto;
  width: min(560px, calc(100vw - 32px));
  padding: 28px;
  border: 2px solid var(--sk-line);
  border-radius: 26px;
  background: var(--sk-bg-soft);
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.12);
  position: relative;
}

.sparkle-dialog::after {
  content: "";
  position: absolute;
  inset: 10px;
  border: 1px dashed rgba(0, 0, 0, 0.28);
  border-radius: 18px;
  pointer-events: none;
}

.sparkle-dialog__header,
.sparkle-dialog__content,
.sparkle-dialog__footer {
  position: relative;
  z-index: 1;
}

.sparkle-dialog__header {
  margin-bottom: 16px;
  padding-right: 48px;
}

.sparkle-dialog__close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 2px solid var(--sk-line);
  border-radius: 999px;
  background: #fff;
  color: var(--sk-ink);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition:
    background var(--sk-transition),
    border-color var(--sk-transition),
    color var(--sk-transition);
}

.sparkle-dialog__close:hover {
  background: var(--sk-bg-muted);
}

.sparkle-dialog__close span {
  line-height: 1;
  font-size: 22px;
}

.sparkle-dialog__title {
  margin: 0;
  font-size: 28px;
  line-height: 1.1;
  color: var(--sk-ink);
}

.sparkle-dialog__content {
  color: var(--sk-ink-soft);
  font-size: 16px;
  line-height: 1.75;
}

.sparkle-dialog__content > :first-child {
  margin-top: 0;
}

.sparkle-dialog__content > :last-child {
  margin-bottom: 0;
}

.sparkle-dialog__footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

@media (max-width: 768px) {
  .sparkle-wrapper {
    align-items: flex-end;
    padding: 16px;
  }

  .sparkle-dialog {
    width: 100%;
    padding: 22px 18px;
    border-radius: 22px;
  }

  .sparkle-dialog__close {
    top: 12px;
    right: 12px;
  }

  .sparkle-dialog__title {
    font-size: 24px;
  }

  .sparkle-dialog__footer {
    flex-wrap: wrap;
  }

  .sparkle-dialog__footer .sparkle-button {
    flex: 1 1 140px;
  }
}
</style>
