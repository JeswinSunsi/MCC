import { createWebHistory, createRouter } from 'vue-router'

import HomeScreen from '../components/HomeScreen.vue'
import IntroScreen from '../components/IntroScreen.vue'
import McqScreen from '../components/McqScreen.vue'
import ResultScreen from '../components/ResultScreen.vue'
import FibScreen from '../components/FibScreen.vue'

const routes = [
  { path: '/home', component: HomeScreen },
  { path: '/', component: IntroScreen },
  { path: '/mcq/:subject/:chaptername/:chapternum', component: McqScreen },
  { path: '/fib/:subject/:chaptername/:chapternum', component: FibScreen },
  { path: '/result/:figure/:stars', component: ResultScreen },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;