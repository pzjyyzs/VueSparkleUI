import { createRouter, createWebHashHistory } from 'vue-router'
import Doc from '../views/Doc.vue'
import DocsHome from '../views/docs/DocsHome.vue'

const demoModules = import.meta.glob('../demos/*.vue')
export const demoRoutes = Object.entries(demoModules)
  .filter(([path]) => !path.endsWith('HomeDemo.vue'))
  .map(([path, component]) => {
  const fileName = path.split('/').pop()?.replace('.vue', '') ?? ''
  const routeName = fileName.replace('Demo', '')
  const slug = routeName.toLowerCase()

  return {
    path: slug,
    name: routeName,
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
