<script setup lang="ts">
import { computed } from 'vue';
import type { SSwitchEmits, SSwitchProps } from './SSwitch.type'

const props = withDefaults(defineProps<SSwitchProps>(), {
  modelValue: false,
  disabled: false,
  size: 'md',
  placeholder: 'right'
})

const emit = defineEmits<SSwitchEmits>()

const handleToggle = () => {
  emit('update:modelValue', !props.modelValue)
}

const placeholderClass = computed(() => {
  if (props.placeholder === 'left') {
    return 'sparkle-switch--label-left'
  } else {
    return 'sparkle-switch--label-right'
  }
})
</script>

<template>
  <button
    type="button"
    role="switch"
    class="sparkle-switch"
    :class="[
      `sparkle-switch--${props.size}`,
      {
        'sparkle-switch--checked': props.modelValue,
        'sparkle-switch--disabled': props.disabled,
      },
      placeholderClass
    ]"
    :aria-checked="props.modelValue"
    :disabled="props.disabled"
    @click="handleToggle"
  >
    <span class="sparkle-switch__track">
      <span class="sparkle-switch__thumb" />
    </span>
    <span class="sparkle-switch__label">
      <slot />
    </span>
  </button>
</template>

<style lang="scss">
.sparkle-switch {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: none;
  background: transparent;
  padding: 0;
  color: var(--sk-ink);
  cursor: pointer;
  font-family: var(--sk-font-body);
  transition: opacity var(--sk-transition);

  &.sparkle-switch--label-right {
    flex-flow: row-reverse;
  }
}

.sparkle-switch__track {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 64px;
  height: 36px;
  padding: 4px;
  border: var(--sk-border-width) solid var(--sk-line);
  border-radius: var(--sk-radius-pill);
  background:
    linear-gradient(transparent 8px, rgba(0, 0, 0, 0.05) 9px),
    var(--sk-bg);
  background-size: 100% 9px, auto;
  box-shadow: var(--sk-shadow-x) var(--sk-shadow-y) 0 var(--sk-shadow-color);
}

.sparkle-switch__thumb {
  width: 20px;
  height: 20px;
  border: 2px solid var(--sk-line);
  border-radius: 50%;
  background: var(--sk-bg);
  transition:
    transform var(--sk-transition),
    background var(--sk-transition),
    color var(--sk-transition);
}

.sparkle-switch__label {
  font-size: 14px;
  color: var(--sk-ink-soft);
}

.sparkle-switch:hover .sparkle-switch__track {
  background:
    linear-gradient(transparent 8px, rgba(0, 0, 0, 0.06) 9px),
    var(--sk-bg-soft);
  background-size: 100% 9px, auto;
}

.sparkle-switch--checked .sparkle-switch__track {
  background: var(--sk-line);
}

.sparkle-switch--checked:hover .sparkle-switch__track {
  background: #222;
}

.sparkle-switch--checked .sparkle-switch__thumb {
  transform: translateX(28px);
  background: var(--sk-bg);
}

.sparkle-switch--checked .sparkle-switch__label {
  color: var(--sk-ink);
}

.sparkle-switch--sm {
  gap: 10px;
}

.sparkle-switch--sm .sparkle-switch__track {
  width: 56px;
  height: 32px;
}

.sparkle-switch--sm .sparkle-switch__thumb {
  width: 16px;
  height: 16px;
}

.sparkle-switch--sm.sparkle-switch--checked .sparkle-switch__thumb {
  transform: translateX(24px);
}

.sparkle-switch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
