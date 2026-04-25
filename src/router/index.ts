import { createRouter, createWebHashHistory } from 'vue-router'
import Doc from '../views/Doc.vue'
import DocsHome from '../views/docs/DocsHome.vue'

const demoMeta: Record<string, { name: string; category: string }> = {
  button: {
    name: 'Button',
    category: 'Inputs',
  },
  switch: {
    name: 'Switch',
    category: 'Inputs',
  },
  input: {
    name: 'Input',
    category: 'Inputs',
  },
  card: {
    name: 'Card',
    category: 'Surfaces',
  },
  dialog: {
    name: 'Dialog',
    category: 'Surfaces',
  },
}

const demoModules = import.meta.glob('../demos/**/*.vue')
export const demoRoutes = Object.entries(demoModules)
  .filter(([path]) => !path.endsWith('HomeDemo.vue'))
  .map(([path, component]) => {
  const fileName = path.split('/').pop()?.replace('.vue', '') ?? ''
  const routeName = fileName.replace('Demo', '')
  const slug = routeName.toLowerCase()
  const meta = demoMeta[slug]

  return {
    path: slug,
    name: meta?.name ?? routeName,
    category: meta?.category ?? 'General',
    component,
  }
})

export const gettingStartedRoutes = [
  {
    path: 'home',
    name: 'Home',
    component: DocsHome,
  },
]

const history = createWebHashHistory()

export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      redirect: '/docs/home',
    },
    {
      path: '/docs',
      component: Doc,
      redirect: '/docs/home',
      children: [...gettingStartedRoutes, ...demoRoutes],
    },
  ],
})
