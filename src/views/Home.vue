<script lang="ts" setup>
import Topnav from '../components/Topnav.vue';
import SButton from '../lib/Button/SButton.vue';
</script>

<template>
  <div class="home">
    <Topnav />

    <header class="hero">
      <p class="hero__eyebrow">ROUGHTLY DRAWN COMPONENTS FOR VUE</p>
      <h1 class="hero__title">
        Sparkle UI
        <span>A rough and playful Vue UI kit with sketch-like outlines.</span>
      </h1>
      <p class="hero__desc">
        A Vue component library inspired by rough wireframes, black-and-white outlines, and small irregular details that keep the controls expressive.
      </p>

      <div class="hero__actions">
        <SButton kind="primary">Get Started</SButton>
        <SButton kind="secondary">View Repository</SButton>
        
      </div>

      <div class="hero__note">
        <strong>v0.1 draft</strong>
        <span>Start with Button, Card, and Input as one consistent rough language.</span>
      </div>
    </header>

    <section class="features">
      <article class="feature-card">
        <span class="feature-card__index">01</span>
        <h2>Rough Outline</h2>
        <p>Components do not aim for industrial precision. They keep a hand-drawn edge.</p>
      </article>

      <article class="feature-card">
        <span class="feature-card__index">02</span>
        <h2>Simple Surface</h2>
        <p>The page stays quiet so the visual focus can stay on buttons, inputs, and cards.</p>
      </article>

      <article class="feature-card">
        <span class="feature-card__index">03</span>
        <h2>Sketch Motion</h2>
        <p>Interactions use tiny shifts and hard shadows to feel clear without becoming loud.</p>
      </article>
    </section>
  </div>
</template>

<style scoped lang="scss">
.home {
  min-height: 100vh;
  padding: 24px 20px 56px;
}

.hero {
  position: relative;
  max-width: 1040px;
  margin: 28px auto 0;
  padding: 48px 28px;
  border: var(--sk-border-width) solid var(--sk-line);
  border-radius: 18px;
  background:
    linear-gradient(transparent 15px, rgba(0, 0, 0, 0.05) 16px),
    var(--sk-bg);
  background-size: 100% 16px, auto;
  box-shadow: var(--sk-shadow-x) var(--sk-shadow-y) 0 var(--sk-shadow-color);
}

.hero__eyebrow {
  display: inline-block;
  margin-bottom: 16px;
  padding: 7px 12px;
  border: 2px solid var(--sk-line);
  border-radius: var(--sk-radius-pill);
  background: var(--sk-bg-soft);
  font-family: var(--sk-font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  transform: rotate(-1deg);
}

.hero__title {
  max-width: 760px;
  font-size: clamp(44px, 8vw, 82px);
  line-height: 0.98;
  letter-spacing: 0.015em;
}

.hero__title span {
  display: block;
  max-width: 680px;
  margin-top: 12px;
  color: var(--sk-ink-soft);
  font-family: var(--sk-font-body);
  font-size: clamp(18px, 2.8vw, 28px);
  line-height: 1.2;
  text-transform: none;
}

.hero__desc {
  max-width: 720px;
  margin-top: 20px;
  font-size: 18px;
  color: var(--sk-ink-soft);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.hero__note {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 28px;
  padding: 14px 16px;
  border: 2px dashed var(--sk-line);
  border-radius: var(--sk-radius-sm);
  background: var(--sk-bg-soft);
  transform: rotate(1deg);
  max-width: 360px;
}

.hero__note strong {
  font-family: var(--sk-font-heading);
  font-size: 18px;
  font-weight: 400;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  max-width: 1040px;
  margin: 28px auto 0;
}

.feature-card {
  position: relative;
  min-height: 210px;
  padding: 22px;
  border: var(--sk-border-width) solid var(--sk-line);
  border-radius: var(--sk-radius);
  background: var(--sk-bg);
  box-shadow: var(--sk-shadow-x) var(--sk-shadow-y) 0 var(--sk-shadow-color);
}

.feature-card::after {
  content: "";
  position: absolute;
  inset: 8px;
  border: 1px solid var(--sk-line);
  border-radius: 6px;
  opacity: 0.2;
  pointer-events: none;
}

.feature-card__index {
  display: inline-block;
  margin-bottom: 18px;
  padding: 5px 10px;
  border: 2px solid var(--sk-line);
  border-radius: var(--sk-radius-pill);
  background: var(--sk-bg-muted);
  font-family: var(--sk-font-body);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.feature-card h2 {
  margin-bottom: 12px;
  font-size: 24px;
  letter-spacing: 0.02em;
}

.feature-card p {
  color: var(--sk-ink-soft);
  font-size: 16px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .home {
    padding-inline: 16px;
  }

  .hero {
    padding: 32px 18px 40px;
  }

  .features {
    grid-template-columns: 1fr;
  }
}
</style>
