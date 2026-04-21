<template>
  <header class="topnav">
    <router-link to="/" class="brand">
      <span class="brand__mark">SP</span>
      <span class="brand__text">
        <strong>Sparkle UI</strong>
      </span>
    </router-link>

    <nav class="menu">
      <router-link to="/" class="menu__item">Home</router-link>
      <router-link to="/docs" class="menu__item">Docs</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.topnav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  border: var(--sk-border-width) solid var(--sk-line);
  border-radius: var(--sk-radius);
  background:
    linear-gradient(transparent 13px, rgba(0, 0, 0, 0.05) 14px),
    var(--sk-bg);
  background-size: 100% 14px, auto;
  box-shadow: var(--sk-shadow-x) var(--sk-shadow-y) 0 var(--sk-shadow-color);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.brand__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: var(--sk-border-width) solid var(--sk-line);
  border-radius: 10px;
  background: var(--sk-line);
  color: var(--sk-bg);
  font-family: var(--sk-font-heading);
  font-size: 17px;
  transform: rotate(-3deg);
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand__text strong {
  font-family: var(--sk-font-heading);
  font-size: 24px;
}

.brand__text small {
  margin-top: 4px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.menu__item {
  padding: 10px 16px;
  border: 3px solid var(--sk-line);
  border-radius: var(--sk-radius-pill);
  background: var(--sk-bg);
  font-family: var(--sk-font-body);
  font-weight: 700;
  transition:
    transform var(--sk-transition),
    background var(--sk-transition),
    color var(--sk-transition);
}

.menu__item:hover,
.menu__item.router-link-active {
  transform: translate(3px, 2px);
  background: var(--sk-line);
  color: var(--sk-bg);
}

@media (max-width: 720px) {
  
  .topnav {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: none;
    border-bottom: 1px solid #3c3c3c1f;
    padding: 0 12px 0 24px;
    height: 55px;
    background: #fff;
    box-shadow: none;
    border-radius: 0;
  }

  .menu {
    display: none;
  }

  .brand__mark {
    width: 24px;
    height: 24px;
  }
  
}
</style>
