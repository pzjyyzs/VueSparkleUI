<script lang="ts" setup>
import Topnav from '../components/Topnav.vue'
import { demoRoutes, gettingStartedRoutes } from '../router'
</script>

<template>
  <div class="docs">
    <Topnav />

    <div class="docs-layout">
      <aside class="docs-sidebar">
        <h2>Getting Started</h2>
        <ul>
          <li v-for="item of gettingStartedRoutes" :key="item.path">
            <router-link :to="`/docs/${item.path}`" class="docs-sidebar__link">{{ item.name }}</router-link>
          </li>
        </ul>

        <h2 class="docs-sidebar__group-title">Components</h2>
        <ul>
          <li v-for="item of demoRoutes" :key="item.path">
            <router-link :to="`/docs/${item.path}`" class="docs-sidebar__link">{{ item.name }}</router-link>
          </li>
        </ul>
      </aside>

      <main class="docs-main">
        <router-view />
      </main>
    </div>
  </div>
</template>



<style scoped lang="scss">
.docs {
  min-height: 100vh;
  padding: 0 24px 64px;
}

.docs-layout {
  display: grid;
  grid-template-columns: 240px minmax(0, 760px);
  justify-content: center;
  gap: 40px;
  margin: 32px 0 0;
}

.docs-sidebar {
  align-self: start;
  position: sticky;
  top: 24px;
  padding: 8px 0;
}

.docs-sidebar h2 {
  margin-bottom: 12px;
  color: var(--sk-ink-soft);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.docs-sidebar__group-title {
  margin-top: 28px;
}

.docs-sidebar ul {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.docs-sidebar li {
  list-style: none;
}

.docs-sidebar__link {
  display: block;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  color: var(--sk-ink-soft);
  text-decoration: none;
  transition:
    background var(--sk-transition),
    color var(--sk-transition);
}

.docs-sidebar__link:hover,
.docs-sidebar__link.router-link-active {
  background: rgba(0, 0, 0, 0.06);
  color: var(--sk-ink);
}

.docs-main {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 4px;
}

.docs-section {
  padding: 0;
  border: none;
  border-radius: 0;
  background: var(--sk-bg);
  box-shadow: none;
}

.docs-section__eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  padding: 0;
  border: none;
  border-radius: 0;
  background: transparent;
  color: var(--sk-ink-soft);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.docs-section h1 {
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.04;
}

.docs-section__desc {
  max-width: 680px;
  margin-top: 14px;
  color: var(--sk-ink-soft);
  font-size: 17px;
  line-height: 1.75;
}

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
    padding: 0 16px 40px;
  }

  .docs-layout {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 16px;
  }

  .docs-sidebar {
    display: none;
  }
}
</style>
