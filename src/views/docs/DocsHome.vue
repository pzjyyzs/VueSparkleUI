<script setup lang="ts">
import SButton from '../../lib/Button/SButton.vue'
</script>

<template>
  <div class="docs-home">
    <section class="intro">
      <p class="intro__eyebrow">Getting Started</p>
      <h1 class="intro__title">Build rough-looking interfaces with simple Vue primitives.</h1>
      <p class="intro__desc">
        Sparkle UI is a Vue component library with sketch-like borders, lightweight interactions,
        and a compact API surface designed for fast prototyping.
      </p>

      <div class="intro__actions">
        <router-link to="/docs/switch">
          <SButton kind="primary">Browse Components</SButton>
        </router-link>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <SButton kind="secondary">GitHub</SButton>
        </a>
      </div>
    </section>

    <section class="setup">
      <div class="setup__header">
        <h2>Setup</h2>
        <p>Install the package, import the styles, and start composing from the base components.</p>
      </div>

      <div class="setup__grid">
        <article class="setup-card">
          <p class="setup-card__label">Install</p>
          <pre class="setup-card__code"><code>pnpm add sparkle-ui</code></pre>
        </article>

        <article class="setup-card">
          <p class="setup-card__label">Import styles</p>
          <pre class="setup-card__code"><code>import 'sparkle-ui/style.css'</code></pre>
        </article>

        <article class="setup-card">
          <p class="setup-card__label">Use a component</p>
          <pre class="setup-card__code"><code>&lt;SButton kind="primary"&gt;Create&lt;/SButton&gt;</code></pre>
        </article>
      </div>
    </section>

    <section class="principles">
      <article class="principle-card">
        <h3>Small surface area</h3>
        <p>Keep the first version focused on a few primitives with a predictable API.</p>
      </article>

      <article class="principle-card">
        <h3>Visual personality</h3>
        <p>Use rough outlines and tiny imperfections without making the interface feel noisy.</p>
      </article>

      <article class="principle-card">
        <h3>Composable by default</h3>
        <p>Buttons, inputs, cards, and switches should work well together before adding complexity.</p>
      </article>
    </section>
  </div>
</template>

<style scoped lang="scss">
.docs-home {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.intro {
  max-width: 760px;
}

.intro__eyebrow {
  margin-bottom: 14px;
  color: var(--sk-ink-soft);
  font-family: var(--sk-font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.intro__title {
  font-family: var(--sk-font-body);
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.025em;
}

.intro__desc {
  max-width: 680px;
  margin-top: 18px;
  color: var(--sk-ink-soft);
  font-family: var(--sk-font-body);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.8;
}

.intro__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.setup {
  padding-top: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

.setup__header {
  max-width: 700px;
}

.setup__header h2 {
  font-family: var(--sk-font-body);
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.setup__header p {
  margin-top: 10px;
  color: var(--sk-ink-soft);
  font-family: var(--sk-font-body);
  font-size: 16px;
  line-height: 1.75;
}

.setup__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 22px;
}

.setup-card,
.principle-card {
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.72);
}

.setup-card__label {
  margin-bottom: 12px;
  font-family: var(--sk-font-body);
  font-size: 13px;
  font-weight: 700;
  color: var(--sk-ink-soft);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.setup-card__code {
  overflow-x: auto;
  padding: 14px 16px;
  border-radius: 10px;
  background: #111;
  color: #fff;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 14px;
  line-height: 1.5;
}

.principles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.principle-card h3 {
  margin-bottom: 10px;
  font-family: var(--sk-font-body);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.principle-card p {
  color: var(--sk-ink-soft);
  font-family: var(--sk-font-body);
  font-size: 15px;
  line-height: 1.75;
}

@media (max-width: 900px) {
  .setup__grid,
  .principles {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .intro__title {
    font-size: 34px;
  }

  .intro__desc {
    font-size: 16px;
  }
}
</style>
