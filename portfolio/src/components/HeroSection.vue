<template>
  <div class="hero">
    <div class="particles"></div>
    <div class="glow-orb orange"></div>
    <div class="glow-orb blue"></div>
    <div class="portal-rings"></div>
    <div class="hero-content">
      <h1 class="glitch" data-text="John Medlock">John Medlock</h1>
      <h2>Computer Science Student at The University of Georgia</h2>
      <p class="typewriter">Crafting Digital Solutions</p>
      <div class="social-links">
        <a href="https://github.com/JohnMedlock" target="_blank" rel="noopener noreferrer" class="hover-effect">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="hover-effect">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 100vh;
  background: linear-gradient(
    45deg,
    rgba(255, 105, 52, 0.1) 0%,
    rgba(0, 163, 225, 0.1) 50%,
    rgba(255, 105, 52, 0.1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: gradientShift 15s ease infinite;
  background-size: 400% 400%;
}

.portal-rings {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at center, transparent 30%, rgba(255, 105, 52, 0.1) 31%, transparent 32%),
    radial-gradient(circle at center, transparent 36%, rgba(0, 163, 225, 0.1) 37%, transparent 38%);
  background-size: 100% 100%;
  animation: pulseRings 4s ease-in-out infinite;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 105, 52, 0.1) 0%, transparent 10%),
    radial-gradient(circle at 80% 80%, rgba(0, 163, 225, 0.1) 0%, transparent 10%);
  opacity: 0.8;
  animation: particleMove 20s ease-in-out infinite;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  transition: all 0.3s ease;
}

.glow-orb.orange {
  background: var(--portal-orange);
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
  animation: floatOrb 15s ease-in-out infinite;
}

.glow-orb.blue {
  background: var(--portal-blue);
  width: 400px;
  height: 400px;
  bottom: -200px;
  left: -200px;
  animation: floatOrb 20s ease-in-out infinite reverse;
}

.hero-content {
  z-index: 1;
  backdrop-filter: blur(5px);
  padding: 3rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: translateY(0);
  transition: all 0.3s ease;
}

.hero-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.3);
}

.hover-effect {
  position: relative;
  display: inline-block;
}

.hover-effect::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -5px;
  left: 0;
  background: linear-gradient(90deg, var(--portal-orange), var(--portal-blue));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.hover-effect:hover::after {
  transform: scaleX(1);
}

@keyframes pulseRings {
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.3; }
  100% { transform: scale(1); opacity: 0.5; }
}

/* Keep existing animations and media queries */

</style>

<script>
export default {
  name: 'HeroSection',
  mounted() {
    document.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    handleMouseMove(e) {
      const orbs = document.querySelectorAll('.glow-orb');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      orbs.forEach(orb => {
        const offsetX = (mouseX - 0.5) * 50;
        const offsetY = (mouseY - 0.5) * 50;
        
        orb.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    }
  }
}
</script>