import { createRouter, createWebHistory } from 'vue-router'
import About from './components/AboutPage.vue'
import Contact from './components/ContactPage.vue'
import Hero from './components/HeroSection.vue'
import Projects from './components/ProjectsPage.vue'

const routes = [
  { path: '/', component: Hero },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
]

export default createRouter({
  history: createWebHistory(),
  routes
})