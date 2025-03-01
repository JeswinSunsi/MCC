import { createWebHistory, createRouter } from 'vue-router'

import HomeScreen from '../components/HomeScreen.vue'
import IntroScreen from '../components/IntroScreen.vue'
import QuizScreen from '../components/QuizScreen.vue'
import ResultScreen from '../components/ResultScreen.vue'

const routes = [
  { path: '/', component: HomeScreen },
  { path: '/intro', component: IntroScreen },
  { path: '/quiz/:subject/:chaptername/:chapternum', component: QuizScreen },
  { path: '/result/:figure/:stars', component: ResultScreen },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;