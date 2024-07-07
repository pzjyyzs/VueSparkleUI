import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory();
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
app.mount('#app')
