import { createWebHistory, createRouter } from 'vue-router'

import HomeScreen from '../views/HomeScreen.vue'
import IntroScreen from '../views/IntroScreen.vue'
import McqScreen from '../views/McqScreen.vue'
import ResultScreen from '../views/ResultScreen.vue'
import FibScreen from '../views/FibScreen.vue'
import ErrorScreen from '../views/ErrorScreen.vue'

const routes = [
  { path: '/home', component: HomeScreen },
  { path: '/', component: IntroScreen },
  { path: '/error', component: ErrorScreen },
  { path: '/mcq/:subject/:chaptername/:chapternum', component: McqScreen },
  { path: '/fib/:subject/:chaptername/:chapternum', component: FibScreen },
  { path: '/result/:figure/:stars', component: ResultScreen },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;