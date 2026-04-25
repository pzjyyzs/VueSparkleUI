<script setup lang="ts">
</script>

<template>
  <div class="preview-card">

    <div class="docs-playground">
      <div class="docs-playground__preview">
        <slot name="preview" />
      </div>

      <div v-if="$slots.controls" class="docs-playground__controls">
        <slot name="controls" />
      </div>

      <div v-if="$slots.code" class="docs-playground__code">
        <slot name="code" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.preview-card {
  margin-top: 28px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 14px;
  background: #fff;
}

.preview-card h3 {
  margin-bottom: 16px;
  font-size: 18px;
}

.docs-playground {
  display: grid;
  gap: 20px;
}

.docs-playground__controls {
  display: grid;
  gap: 16px;
}

.docs-playground__preview {
  display: flex;
  align-items: center;
  min-height: 120px;
  padding: 20px;
  border: 1px dashed rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.015);
}

.docs-playground__code {
  display: grid;
  gap: 10px;
}
</style>
