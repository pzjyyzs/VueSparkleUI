<script setup lang="ts">
import type { SButtonProps } from './SButton.type';

withDefaults(defineProps<SButtonProps>(), {
  type: 'primary',
  size: 'md',
  disabled: false
});
</script>

<template>
  <button
    type="button"
    :class="[
        's-btn',
        `s-btn--${type}`,
        `s-btn--${size}`,
        { 's-btn--disabled': disabled }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>


<style lang="scss" scoped>
.s-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 20px;
  border: var(--sk-border-width) solid var(--sk-line);
  border-radius: var(--sk-radius);
  background: var(--sk-bg);
  box-shadow: var(--sk-shadow-x) var(--sk-shadow-y) 0 var(--sk-shadow-color);
  font-family: var(--sk-font-heading);
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 0.03em;
  transition:
    transform var(--sk-transition),
    box-shadow var(--sk-transition),
    background var(--sk-transition),
    color var(--sk-transition);
  cursor: pointer;
}

.s-btn:hover {
  transform: translate(3px, 3px) rotate(-1deg);
  box-shadow: 1px 1px 0 var(--sk-shadow-color);
}

.s-btn--primary {
  background: var(--sk-line);
  color: var(--sk-bg);
}

.s-btn--outline {
  background:
    linear-gradient(transparent 9px, rgba(0, 0, 0, 0.05) 10px),
    var(--sk-bg);
  background-size: 100% 10px, auto;
}

.s-btn--sm {
  min-height: 40px;
  padding: 0 14px;
  font-size: 14px;
}

.s-btn--md {
  min-height: 50px;
  padding: 0 20px;
  font-size: 17px;
}

.s-btn--lg {
  min-height: 58px;
  padding: 0 24px;
  font-size: 19px;
}

.s-btn--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.s-btn--disabled:hover {
  transform: none;
  box-shadow: var(--sk-shadow-x) var(--sk-shadow-y) 0 var(--sk-shadow-color);
}
</style>
