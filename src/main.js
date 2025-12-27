import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/css/globals.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('./views/Components.vue')
    },
    {
      path: '/stars',
      name: 'Stars',
      component: () => import('./views/Stars.vue')
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
