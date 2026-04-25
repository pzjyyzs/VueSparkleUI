<script lang="ts" setup>
import type { SInputEmits, SInputProps } from './SInput.type';

withDefaults(defineProps<SInputProps>(), {
  modelValue: '',
  placeholder: '',
  disabled: false,
  size: 'md'
});

const emit = defineEmits<SInputEmits>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

</script>

<template>
  <input
    :class="[
        'sparkle-input',
        `sparkle-input--${size}`,
        { 'sparkle-input--disabled': disabled }
    ]"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<style lang="scss">
.sparkle-input {
  width: 100%;
  min-height: 50px;
  padding: 0 16px;
  border: 2px solid var(--sk-line);
  border-radius: 20px;
  background: var(--sk-bg-soft);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.12);
  font-family: var(--sk-font-body);
  font-size: 16px;
  color: var(--sk-ink);
  outline: none;
  transition:
    box-shadow var(--sk-transition),
    border-color var(--sk-transition),
    background var(--sk-transition);
}

.sparkle-input::placeholder {
  color: var(--sk-ink-soft);
  opacity: 0.9;
}

.sparkle-input:focus {
  background: #fff;
  border-color: #111;
  box-shadow: 0 0 0 3px rgba(191, 227, 255, 0.9);
}

.sparkle-input--sm {
  min-height: 40px;
  padding: 0 12px;
  font-size: 14px;
}

.sparkle-input--md {
  min-height: 50px;
  padding: 0 16px;
  font-size: 16px;
}

.sparkle-input--lg {
  min-height: 58px;
  padding: 0 18px;
  font-size: 18px;
}

.sparkle-input--disabled {
  opacity: 0.55;
  cursor: not-allowed;
  background: var(--sk-bg-muted);
}
</style>
