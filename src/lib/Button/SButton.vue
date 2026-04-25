<script setup lang="ts">
import type { SButtonProps } from './SButton.type';

const props = withDefaults(defineProps<SButtonProps>(), {
  kind: 'primary',
  size: 'md',
  disabled: false
});
</script>

<template>
  <button
    type="button"
    :class="[
        'sparkle-button',
        `sparkle-button--${kind}`,
        `sparkle-button--${size}`,
        { 'sparkle-button--disabled': disabled }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>


<style lang="scss">
.sparkle-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 20px;
  border: 2px solid var(--sk-line);
  border-radius: 999px;
  background: #fff;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.14);
  font-family: var(--sk-font-heading);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition:
    box-shadow var(--sk-transition),
    background var(--sk-transition),
    color var(--sk-transition),
    border-color var(--sk-transition);
  cursor: pointer;
}

.sparkle-button:hover {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.14);
}

.sparkle-button--primary {
  background: #111;
  color: #fff;
}

.sparkle-button--secondary {
  background: #fff;
  color: var(--sk-ink);
}

.sparkle-button--tertiary {
  min-height: auto;
  padding: 0 4px;
  border-color: transparent;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: var(--sk-ink);
}

.sparkle-button--dangerPrimary {
  border-color: #d92d20;
  background: #d92d20;
  color: #fff;
}

.sparkle-button--dangerSecondary {
  border-color: #d92d20;
  background: #fff;
  color: #d92d20;
}

.sparkle-button--dangerTertiary {
  min-height: auto;
  padding: 0 4px;
  border-color: transparent;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: #d92d20;
}

.sparkle-button--tertiary:hover,
.sparkle-button--dangerTertiary:hover {
  box-shadow: none;
  background: transparent;
}

.sparkle-button--secondary:hover {
  background: #f7f7f7;
}

.sparkle-button--tertiary:hover {
  color: var(--sk-ink-soft);
}

.sparkle-button--dangerSecondary:hover {
  background: #fff5f4;
}

.sparkle-button--dangerTertiary:hover {
  color: #b42318;
}

.sparkle-button--sm {
  min-height: 38px;
  padding: 0 14px;
  font-size: 14px;
}

.sparkle-button--md {
  min-height: 50px;
  padding: 0 20px;
  font-size: 16px;
}

.sparkle-button--lg {
  min-height: 56px;
  padding: 0 24px;
  font-size: 18px;
}

.sparkle-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.sparkle-button--disabled:hover {
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.14);
}
</style>
