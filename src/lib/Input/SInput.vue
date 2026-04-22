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
        's-input',
        `s-input--${size}`,
        { 's-input--disabled': disabled }
    ]"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<style scoped lang="scss">
.s-input {
  width: 100%;
  min-height: 50px;
  padding: 0 16px;
  border: var(--sk-border-width) solid var(--sk-line);
  border-radius: var(--sk-radius);
  background: var(--sk-bg);
  box-shadow: var(--sk-shadow-x) var(--sk-shadow-y) 0 var(--sk-shadow-color);
  font-family: var(--sk-font-body);
  font-size: 16px;
  color: var(--sk-ink);
  outline: none;
  transition:
    transform var(--sk-transition),
    box-shadow var(--sk-transition),
    border-color var(--sk-transition);
}

.s-input::placeholder {
  color: var(--sk-ink-soft);
}

.s-input:focus {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--sk-shadow-color);
}

.s-input--sm {
  min-height: 40px;
  padding: 0 12px;
  font-size: 14px;
}

.s-input--md {
  min-height: 50px;
  padding: 0 16px;
  font-size: 16px;
}

.s-input--lg {
  min-height: 58px;
  padding: 0 18px;
  font-size: 18px;
}

.s-input--disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
</style>