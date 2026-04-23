<script setup lang="ts">
import type{ SCardProps } from './SCard.type';

withDefaults(defineProps<SCardProps>(), {
  title: ''
});
</script>

<template>
  <section class="sparkle-card">
    <h3 v-if="title" class="sparkle-card__title">{{ title }}</h3>
    <div class="sparkle-card__body">
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
.sparkle-card {
  padding: 20px;
  border: var(--sk-border-width) solid var(--sk-line);
  border-radius: var(--sk-radius);
  background: var(--sk-bg);
  box-shadow: var(--sk-shadow-x) var(--sk-shadow-y) 0 var(--sk-shadow-color);
  position: relative;
}

.sparkle-card::after {
  content: "";
  position: absolute;
  inset: 8px;
  border: 1px solid var(--sk-line);
  border-radius: 6px;
  opacity: 0.18;
  pointer-events: none;
}

.sparkle-card__title {
  margin-bottom: 12px;
  font-size: 22px;
}

.sparkle-card__body {
  color: var(--sk-ink-soft);
  line-height: 1.6;
}

</style>
