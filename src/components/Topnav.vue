<template>
  <header class="topnav">
    <router-link to="/docs/home" class="brand">
      <span class="brand__mark">SP</span>
      <span class="brand__text">
        <strong>Sparkle UI</strong>
        <small>Rough Vue components</small>
      </span>
    </router-link>

    <nav class="menu">
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        class="menu__icon"
        aria-label="GitHub"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
          />
        </svg>
      </a>

      <button type="button" class="menu__icon" aria-label="Toggle dark mode">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21 12.8A8.98 8.98 0 0 1 11.2 3a1 1 0 0 0-1.18-1A10 10 0 1 0 22 13.98a1 1 0 0 0-1-1.18Z"
          />
        </svg>
      </button>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.topnav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 64px;
  padding: 0 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.92);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}

.brand__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #111;
  color: #fff;
  font-family: var(--sk-font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand__text strong {
  font-family: var(--sk-font-body);
  font-size: 15px;
  font-weight: 700;
}

.brand__text small {
  margin-top: 5px;
  color: var(--sk-ink-soft);
  font-size: 12px;
  font-weight: 500;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.menu__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background: transparent;
  color: var(--sk-ink-soft);
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--sk-transition),
    color var(--sk-transition);
}

.menu__icon:hover {
  background: rgba(0, 0, 0, 0.06);
  color: var(--sk-ink);
}

.menu__icon svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

@media (max-width: 720px) {
  .topnav {
    height: 56px;
    padding: 0;
  }

  .menu {
    display: none;
  }

  .brand__mark {
    width: 30px;
    height: 30px;
  }
}
</style>
