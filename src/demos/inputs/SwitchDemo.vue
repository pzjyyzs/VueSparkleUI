<script setup lang="ts">
import { computed, ref } from 'vue'
import DocsPlayground from '../../components/DocsPlayground.vue'
import SSwitch from '../../lib/Switch/SSwitch.vue'
import type { SwitchPlaceholder, SwitchSize } from '../../lib/Switch/SSwitch.type'

const modelValue = ref(true)
const disabled = ref(false)
const size = ref<SwitchSize>('md')
const placeholder = ref<SwitchPlaceholder>('right')
const label = ref('Notifications')

const sizes: SwitchSize[] = ['sm', 'md']
const placements: SwitchPlaceholder[] = ['left', 'right']

const exampleCode = computed(() => {
  const attrs = [`size="${size.value}"`, `placeholder="${placeholder.value}"`]

  if (disabled.value) {
    attrs.push('disabled')
  }

  if (modelValue.value) {
    attrs.push(':model-value="true"')
  }

  return `<SSwitch ${attrs.join(' ')}>${label.value}</SSwitch>`
})
</script>

<template>
  <section class="docs-section">
    <h1>Switch</h1>
    <p class="docs-section__desc">
      A compact toggle for binary states such as enabled and disabled.
    </p>

    <DocsPlayground title="Playground">
      <template #controls>
        <div class="switch-demo__controls">
          <label class="switch-demo__field">
            <span>Size</span>
            <select v-model="size">
              <option v-for="item in sizes" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </label>

          <label class="switch-demo__field">
            <span>Label position</span>
            <select v-model="placeholder">
              <option v-for="item in placements" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </label>

          <label class="switch-demo__field">
            <span>Label</span>
            <input v-model="label" type="text" />
          </label>

          <div class="switch-demo__checks">
            <label class="switch-demo__checkbox">
              <input v-model="modelValue" type="checkbox" />
              <span>Checked</span>
            </label>

            <label class="switch-demo__checkbox">
              <input v-model="disabled" type="checkbox" />
              <span>Disabled</span>
            </label>
          </div>
        </div>
      </template>

      <template #preview>
        <div class="switch-demo__preview">
          <SSwitch
            v-model="modelValue"
            :size="size"
            :disabled="disabled"
            :placeholder="placeholder"
          >
            {{ label }}
          </SSwitch>
        </div>
      </template>

      <template #code>
        <div class="switch-demo__code">
          <p class="switch-demo__code-label">Code</p>
          <pre><code>{{ exampleCode }}</code></pre>
        </div>
      </template>
    </DocsPlayground>
  </section>
</template>

<style scoped lang="scss">
.switch-demo__controls {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.switch-demo__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.switch-demo__field span,
.switch-demo__checkbox span,
.switch-demo__code-label {
  color: var(--sk-ink-soft);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.switch-demo__field select,
.switch-demo__field input {
  width: 100%;
  min-height: 40px;
  padding: 0 12px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 10px;
  background: #fff;
  color: var(--sk-ink);
  font: inherit;
}

.switch-demo__checks {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
}

.switch-demo__checkbox {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.switch-demo__preview {
  display: flex;
  align-items: center;
  min-height: 120px;
}

.switch-demo__code {
  display: grid;
  gap: 10px;
}

.switch-demo__code pre {
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
  .switch-demo__controls {
    grid-template-columns: 1fr;
  }
}
</style>
