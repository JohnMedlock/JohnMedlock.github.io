<template>
  <div id="hero" class="hero">
    <div class="particles"></div>
    <div class="glow-orb orange"></div>
    <div class="glow-orb blue"></div>
    <div class="portal-rings"></div>
    <div class="hero-content" :style="contentTransform">
      <h1 class="title">John Medlock</h1>
      <h2 class="fade-in">Computer Science Student at The University of Georgia</h2>
      <p class="typewriter">
        <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </p>
      <div class="social-links">
        <a href="https://github.com/JohnMedlock" target="_blank" rel="noopener noreferrer" class="hover-effect">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/jwmedlock" target="_blank" rel="noopener noreferrer" class="hover-effect">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div class="arrows">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: [
        'Building Digital Portals',
        'Coding the Future',
        'Full Stack Developer',
        'Problem Solver',
        'Tech Explorer',
        'UGA Software Engineer'
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
      contentTransform: {
        transform: 'translate(0px, 0px) rotateX(0deg) rotateY(0deg)',
        transition: 'all 0.3s ease'
      }
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.handleMouseMove);
    this.typeText();
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    handleMouseMove(e) {
      const orbs = document.querySelectorAll('.glow-orb');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      // Update orbs
      orbs.forEach(orb => {
        const offsetX = (mouseX - 0.5) * 50;
        const offsetY = (mouseY - 0.5) * 50;
        orb.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });

      // 3D effect for hero content
      const rotateY = (mouseX - 0.5) * 20;
      const rotateX = (mouseY - 0.5) * -20;
      this.contentTransform.transform = 
        `translate(${mouseX * 10}px, ${mouseY * 10}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    async typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    async eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length) this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  }
}
</script>

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

.typed-text {
  font-weight: bold;
  color: var(--portal-orange);
}

.cursor {
  display: inline-block;
  width: 3px;
  background-color: var(--portal-blue);
  margin-left: 0.1rem;
  animation: blink 1s infinite;
}

.cursor.typing {
  animation: none;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid var(--portal-orange);
  border-radius: 15px;
  position: relative;
}

.wheel {
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: var(--portal-blue);
  border-radius: 2px;
  animation: scroll 1.5s ease infinite;
}

.arrows {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.arrows span {
  display: block;
  width: 10px;
  height: 10px;
  border-right: 2px solid var(--portal-orange);
  border-bottom: 2px solid var(--portal-orange);
  transform: rotate(45deg);
  animation: arrow-bounce 1.5s infinite;
  opacity: 0;
}

.arrows span:nth-child(2) {
  animation-delay: 0.2s;
}

.arrows span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes scroll {
  0% { transform: translate(-50%, 0); opacity: 1; }
  100% { transform: translate(-50%, 20px); opacity: 0; }
}

@keyframes arrow-bounce {
  0% { transform: rotate(45deg) translate(-20px, -20px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: rotate(45deg) translate(0, 0); opacity: 0; }
}

.title {
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(135deg, var(--portal-orange), var(--portal-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.5s;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>