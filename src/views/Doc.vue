<script lang="ts" setup>
import { ref } from 'vue'
import Topnav from './Topnav.vue'
import SButton from '../components/Button/SButton.vue'
import SInput from '../components/Input/SInput.vue'
import SCard from '../components/Card/SCard.vue'
import { userMenuStore } from '../store/menu.store'

const inputValue = ref('')

</script>

<template>
  <div class="docs">
    <Topnav />

    <div class="docs-layout">
      <aside class="docs-sidebar">
        <h2>Components</h2>
        <ul>
          <li>Button</li>
          <li>Input</li>
          <li>Card</li>
        </ul>
      </aside>

      <main class="docs-main">
        <section class="docs-section">
          <p class="docs-section__eyebrow">Components</p>
          <h1>Button</h1>
          <p class="docs-section__desc">
            Rough buttons for primary actions, secondary actions, and disabled states.
          </p>

          <div class="preview-card">
            <h3>Preview</h3>

            <div class="preview-row">
              <SButton type="primary">Primary</SButton>
              <SButton type="outline">Outline</SButton>
              <SButton size="sm">Small</SButton>
              <SButton disabled>Disabled</SButton>
            </div>
          </div>
        </section>

        <section class="docs-section">
            <p class="docs-section__eyebrow">Components</p>
            <h1>Input</h1>
            <p class="docs-section__desc">
                Rough text inputs for forms, search boxes, and simple data entry.
            </p>

            <div class="preview-card">
                <h3>Preview</h3>

                <div class="input-preview">
                    <SInput v-model="inputValue" placeholder="Type something..." />
                    <SInput size="sm" placeholder="Small input" />
                    <SInput size="lg" placeholder="Large input" />
                    <SInput disabled placeholder="Disabled input" />
                </div>
            </div>
        </section>

        <SCard title="Actions">
            <p>Cards can also hold interactive content.</p>
            <SButton size="sm">Action</SButton>
        </SCard>
      </main>
    </div>
  </div>
</template>



<style scoped lang="scss">
.docs {
  min-height: 100vh;
  padding: 24px 20px 56px;
}

.docs-layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 24px;
  margin: 28px 0;
}

.docs-sidebar {
  align-self: start;
  padding: 20px;
  border: var(--sk-border-width) solid var(--sk-line);
  border-radius: var(--sk-radius);
  background: var(--sk-bg);
  box-shadow: var(--sk-shadow-x) var(--sk-shadow-y) 0 var(--sk-shadow-color);
}

.docs-sidebar h2 {
  margin-bottom: 14px;
  font-size: 20px;
}

.docs-sidebar ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.docs-sidebar li {
  padding: 8px 10px;
  border: 2px solid var(--sk-line);
  border-radius: var(--sk-radius-sm);
  background: var(--sk-bg-soft);
  font-size: 14px;
}

.docs-main {
  min-width: 0;
}

.docs-section {
  padding: 28px;
  border: var(--sk-border-width) solid var(--sk-line);
  border-radius: 18px;
  background: var(--sk-bg);
  box-shadow: var(--sk-shadow-x) var(--sk-shadow-y) 0 var(--sk-shadow-color);
}

.docs-section__eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  padding: 6px 10px;
  border: 2px solid var(--sk-line);
  border-radius: var(--sk-radius-pill);
  background: var(--sk-bg-soft);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.docs-section h1 {
  font-size: clamp(34px, 5vw, 52px);
  line-height: 1;
}

.docs-section__desc {
  max-width: 640px;
  margin-top: 14px;
  color: var(--sk-ink-soft);
  font-size: 17px;
  line-height: 1.6;
}

.preview-card {
  margin-top: 28px;
  padding: 20px;
  border: 2px solid var(--sk-line);
  border-radius: var(--sk-radius);
  background:
    linear-gradient(transparent 11px, rgba(0, 0, 0, 0.04) 12px),
    var(--sk-bg-soft);
  background-size: 100% 12px, auto;
}

.preview-card h3 {
  margin-bottom: 16px;
  font-size: 20px;
}

.preview-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.input-preview {
  display: grid;
  gap: 16px;
  max-width: 420px;
}

@media (max-width: 768px) {
    .docs {
        padding: 0;
    }

    .docs-layout {
        grid-template-columns: 1fr;
    }

    .docs-sidebar {
        display: none;
    }

    .docs-section {
        padding: 22px 18px;
    }

}
</style>