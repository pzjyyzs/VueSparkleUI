import { createApp } from 'vue'
import './style/index.scss'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import { createPinia } from 'pinia'

const history = createWebHashHistory();
const pinia = createPinia()
const router = createRouter({
  history,
  routes: [
    {
      path: '/', component: Home,
    },
    {
      path: '/docs', component: Doc,
    }
  ]
})
const app = createApp(App)
app.use(router)

app.use(pinia)
app.mount('#app')
