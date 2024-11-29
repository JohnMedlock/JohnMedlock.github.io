<template>
  <div id="app">
    <nav-bar />
    <main class="main-content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <footer class="footer">
      <p>&copy; {{ currentYear }} John Medlock. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import router from './router';

export default {
  name: 'App',
  components: {
    NavBar
  },
  router,
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style>
:root {
  --portal-orange: #ff6934;
  --portal-blue: #00a3e1;
  --text-color: #333;
  --bg-color: #f5f5f5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  background: var(--bg-color);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 0;
  width: 100%;
}

.footer {
  text-align: center;
  padding: 1rem;
  background: linear-gradient(135deg, var(--portal-orange) 0%, var(--portal-blue) 100%);
  color: white;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>