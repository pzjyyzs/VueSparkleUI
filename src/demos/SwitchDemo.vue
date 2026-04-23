<script setup lang="ts">
import { ref } from 'vue'
import SSwitch from '../lib/Switch/SSwitch.vue'

const enabled = ref(true)
const secondary = ref(false)
</script>

<template>
  <section class="docs-section">
    <p class="docs-section__eyebrow">Components</p>
    <h1>Switch</h1>
    <p class="docs-section__desc">
      A compact toggle for binary states such as enabled and disabled.
    </p>

    <div class="preview-card">
      <h3>Preview</h3>
      <div class="switch-preview">
        <SSwitch v-model="enabled">123</SSwitch>
        <SSwitch v-model="secondary" size="sm" />
        <SSwitch :model-value="true" disabled />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.switch-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: center;
}
</style>
