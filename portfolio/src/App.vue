<template>
  <div id="app">
    <nav-bar :show-nav="showNav" />
    <main class="main-content">
      <hero-section />
      <about-page />
      <projects-page />
      <contact-page />
    </main>
    <footer class="footer">
      <p>&copy; {{ currentYear }} John Medlock. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import HeroSection from './components/HeroSection.vue'
import NavBar from './components/NavBar.vue'
import ProjectsPage from './components/ProjectsPage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    AboutPage,
    ProjectsPage,
    ContactPage
  },
  data() {
    return {
      showNav: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        const aboutPosition = aboutSection.offsetTop
        this.showNav = window.scrollY >= aboutPosition - 100
      }
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.footer {
  text-align: center;
  padding: 1rem;
  background: linear-gradient(135deg, var(--portal-orange) 0%, var(--portal-blue) 100%);
  color: white;
}

/* Global styles and CSS variables */
:root {
  --portal-orange: #ff6934;
  --portal-blue: #00a3e1;
  --text-color: #333;
  --bg-color: #f5f5f5;
}

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  background: var(--bg-color);
}

/* App-specific styles */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.footer {
  text-align: center;
  padding: 1rem;
  background: linear-gradient(135deg, var(--portal-orange) 0%, var(--portal-blue) 100%);
  color: white;
}

/* Scroll margin for sections */
#hero, #about, #projects, #contact {
  scroll-margin-top: 80px;
}
</style>