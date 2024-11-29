<template>
  <nav class="navbar" :class="{ 'navbar-visible': showNav }">
    <div class="nav-brand">JM</div>
    <div class="nav-links">
      <a href="#hero" id="nav-home">Home</a>
      <a href="#about" id="nav-about">About</a>
      <a href="#projects" id="nav-projects">Projects</a>
      <a href="#contact" id="nav-contact">Contact</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    showNav: {
      type: Boolean,
      default: false
    }
  }
}
</script>
  
  <style scoped>
  :root {
    --portal-orange: #ff6934;
    --portal-blue: #00a3e1;
  }
  
  .navbar {
    padding: 1.2rem 2rem;
    background: linear-gradient(135deg, #ff6934 0%, #00a3e1 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .navbar-visible {
    transform: translateY(0);
    opacity: 1;
  }
  
  .nav-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
  }
  
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    position: relative;
  }
  
  a:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  a.router-link-active {
    background: rgba(255, 255, 255, 0.2);
  }
  
  a.router-link-active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    animation: slideIn 0.3s ease forwards;
  }
  
  @keyframes slideIn {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
  
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      padding: 1rem;
    }
    
    .nav-links {
      margin-top: 1rem;
      gap: 1rem;
    }
  }
  </style>