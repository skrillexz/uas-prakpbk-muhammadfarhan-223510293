import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import WeatherPage from '../pages/WeatherPage.vue'
import TaskPage from '../pages/TaskPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/weather', component: WeatherPage },
  { path: '/tasks', component: TaskPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
