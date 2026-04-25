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
  border: 2px solid var(--sk-line);
  border-radius: 24px;
  background: var(--sk-bg-soft);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.12);
  position: relative;
}

.sparkle-card::after {
  content: "";
  position: absolute;
  inset: 10px;
  border: 1px dashed rgba(0, 0, 0, 0.24);
  border-radius: 18px;
  opacity: 0.65;
  pointer-events: none;
}

.sparkle-card__title {
  margin-bottom: 12px;
  font-size: 21px;
  letter-spacing: 0.01em;
}

.sparkle-card__body {
  color: var(--sk-ink-soft);
  line-height: 1.7;
}

</style>
