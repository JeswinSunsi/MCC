import { createWebHistory, createRouter } from 'vue-router'

import HomeScreen from '../components/HomeScreen.vue'
import IntroScreen from '../components/IntroScreen.vue'
import QuizScreen from '../components/QuizScreen.vue'

const routes = [
  { path: '/', component: HomeScreen },
  { path: '/intro', component: IntroScreen },
  { path: '/quiz', component: QuizScreen }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;