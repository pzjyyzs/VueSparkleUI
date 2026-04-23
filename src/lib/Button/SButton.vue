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

.sparkle-button:hover {
  transform: translate(3px, 3px) rotate(-1deg);
  box-shadow: 1px 1px 0 var(--sk-shadow-color);
}

.sparkle-button--primary {
  background: var(--sk-line);
  color: var(--sk-bg);
}

.sparkle-button--secondary {
  background:
    linear-gradient(transparent 9px, rgba(0, 0, 0, 0.05) 10px),
    var(--sk-bg);
  background-size: 100% 10px, auto;
  color: var(--sk-ink);
}

.sparkle-button--tertiary {
  min-height: auto;
  padding: 0 2px;
  border-color: transparent;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: var(--sk-ink);
}

.sparkle-button--dangerPrimary {
  border-color: #b42318;
  background: #b42318;
  color: #fff;
}

.sparkle-button--dangerSecondary {
  border-color: #b42318;
  background:
    linear-gradient(transparent 9px, rgba(180, 35, 24, 0.08) 10px),
    #fff7f6;
  background-size: 100% 10px, auto;
  color: #b42318;
}

.sparkle-button--dangerTertiary {
  min-height: auto;
  padding: 0 2px;
  border-color: transparent;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: #b42318;
}

.sparkle-button--tertiary:hover,
.sparkle-button--dangerTertiary:hover {
  transform: none;
  box-shadow: none;
  background: transparent;
}

.sparkle-button--secondary:hover {
  background: var(--sk-bg-soft);
}

.sparkle-button--tertiary:hover {
  color: var(--sk-ink-soft);
}

.sparkle-button--dangerSecondary:hover {
  background: #fff0ee;
}

.sparkle-button--dangerTertiary:hover {
  color: #8f1d14;
}

.sparkle-button--sm {
  min-height: 40px;
  padding: 0 14px;
  font-size: 14px;
}

.sparkle-button--md {
  min-height: 50px;
  padding: 0 20px;
  font-size: 17px;
}

.sparkle-button--lg {
  min-height: 58px;
  padding: 0 24px;
  font-size: 19px;
}

.sparkle-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.sparkle-button--disabled:hover {
  transform: none;
  box-shadow: var(--sk-shadow-x) var(--sk-shadow-y) 0 var(--sk-shadow-color);
}
</style>
