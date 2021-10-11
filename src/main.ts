import { createApp } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Purple from './components/Purple.vue'
import './main.css'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/purple', component: Purple },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App).use(router)

app.mount('#app')
