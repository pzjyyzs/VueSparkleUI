<script setup lang="ts">
import { computed, ref } from 'vue'
import DocsPlayground from '../../components/DocsPlayground.vue'
import SButton from '../../lib/Button/SButton.vue'
import type { ButtonKind, ButtonSize } from '../../lib/Button/SButton.type'

const kind = ref<ButtonKind>('primary')
const size = ref<ButtonSize>('md')
const disabled = ref(false)
const label = ref('Create')

const kinds: ButtonKind[] = [
  'primary',
  'secondary',
  'tertiary',
  'dangerPrimary',
  'dangerSecondary',
  'dangerTertiary',
]

const sizes: ButtonSize[] = ['sm', 'md', 'lg']

const exampleCode = computed(() => {
  const attrs = [`kind="${kind.value}"`, `size="${size.value}"`]

  if (disabled.value) {
    attrs.push('disabled')
  }

  return `<SButton ${attrs.join(' ')}>${label.value}</SButton>`
})
</script>

<template>
  <section class="docs-section">
    <p class="docs-section__eyebrow">Components</p>
    <h1>Button</h1>
    <p class="docs-section__desc">
      Buttons communicate actions users can take and support multiple visual levels.
    </p>

    <DocsPlayground>
      <template #controls>
        <div class="button-demo__controls">
          <label class="button-demo__field">
            <span>Kind</span>
            <select v-model="kind">
              <option v-for="item in kinds" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </label>

          <label class="button-demo__field">
            <span>Size</span>
            <select v-model="size">
              <option v-for="item in sizes" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </label>

          <label class="button-demo__field">
            <span>Label</span>
            <input v-model="label" type="text" />
          </label>

          <label class="button-demo__checkbox">
            <input v-model="disabled" type="checkbox" />
            <span>Disabled</span>
          </label>
        </div>
      </template>

      <template #preview>
        <SButton :kind="kind" :size="size" :disabled="disabled">
          {{ label }}
        </SButton>
      </template>

      <template #code>
        <div class="button-demo__code">
          <p class="button-demo__code-label">Code</p>
          <pre><code>{{ exampleCode }}</code></pre>
        </div>
      </template>
    </DocsPlayground>
  </section>
</template>

<style scoped lang="scss">
.button-demo__controls {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.button-demo__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.button-demo__field span,
.button-demo__checkbox span,
.button-demo__code-label {
  color: var(--sk-ink-soft);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.button-demo__field select,
.button-demo__field input {
  width: 100%;
  min-height: 40px;
  padding: 0 12px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 10px;
  background: #fff;
  color: var(--sk-ink);
  font: inherit;
}

.button-demo__checkbox {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.button-demo__code {
  display: grid;
  gap: 10px;
}

.button-demo__code pre {
  overflow-x: auto;
  padding: 14px 16px;
  border-radius: 12px;
  background: #111;
  color: #fff;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .button-demo__controls {
    grid-template-columns: 1fr;
  }
}
</style>
