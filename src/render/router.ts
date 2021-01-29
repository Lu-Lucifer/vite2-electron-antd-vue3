
import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})

export default router