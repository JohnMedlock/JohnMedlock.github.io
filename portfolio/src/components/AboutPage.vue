<template>
    <div class="about-section">
      <div class="about-container">
        <section class="intro">
          <h1>About Me</h1>
          <div class="bio">
            <div class="bio-content">
              <p>Hi, I'm John Medlock, a Full Stack Developer passionate about creating innovative web solutions. With expertise in modern web technologies, I focus on building scalable and user-friendly applications.</p>
              <p>My journey in tech started with a curiosity for problem-solving and has evolved into a career crafting digital experiences.</p>
            </div>
          </div>
        </section>
  
        <section class="skills">
          <h2>Technical Skills</h2>
          <div class="skills-grid">
            <div class="skill-category" v-for="(category, index) in skills" :key="index">
              <h3>{{ category.title }}</h3>
              <ul>
                <li v-for="(skill, idx) in category.items" :key="idx">{{ skill }}</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section class="timeline">
          <h2>Experience</h2>
          <div class="timeline-container">
            <div class="timeline-item" v-for="(item, index) in experience" :key="index">
              <div class="timeline-content">
                <h3>{{ item.role }}</h3>
                <h4>{{ item.company }}</h4>
                <p class="date">{{ item.period }}</p>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
    data() {
      return {
        skills: [
          {
            title: 'Frontend',
            items: ['Vue.js', 'React', 'JavaScript', 'HTML/CSS', 'Responsive Design']
          },
          {
            title: 'Backend',
            items: ['Node.js', 'Python', 'SQL', 'REST APIs', 'GraphQL']
          },
          {
            title: 'Tools & Others',
            items: ['Git', 'Docker', 'AWS', 'Agile/Scrum', 'CI/CD']
          }
        ],
        experience: [
          {
            role: 'Full Stack Developer',
            company: 'Company Name',
            period: '2022 - Present',
            description: 'Leading development of web applications using modern technologies.'
          },
          {
            role: 'Frontend Developer',
            company: 'Previous Company',
            period: '2020 - 2022',
            description: 'Developed responsive web interfaces and improved user experience.'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .about-section {
    padding: 4rem 2rem;
    background: linear-gradient(45deg, rgba(255, 105, 52, 0.1), rgba(0, 163, 225, 0.1));
    min-height: 100vh;
  }
  
  .about-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h1 {
    color: var(--portal-orange);
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
  
  h2 {
    color: var(--portal-blue);
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  
  .bio {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 4rem;
  }
  
  .bio p {
    margin-bottom: 1rem;
    line-height: 1.8;
    font-size: 1.1rem;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .skill-category {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .skill-category h3 {
    color: var(--portal-orange);
    margin-bottom: 1rem;
  }
  
  .skill-category ul {
    list-style: none;
  }
  
  .skill-category li {
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;
  }
  
  .skill-category li::before {
    content: '•';
    color: var(--portal-blue);
    position: absolute;
    left: 0;
  }
  
  .timeline-container {
    position: relative;
    padding: 2rem 0;
  }
  
  .timeline-item {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    position: relative;
    transition: transform 0.3s ease;
  }
  
  .timeline-item:hover {
    transform: translateY(-5px);
  }
  
  .timeline-content h3 {
    color: var(--portal-orange);
    margin-bottom: 0.5rem;
  }
  
  .timeline-content h4 {
    color: var(--portal-blue);
    margin-bottom: 0.5rem;
  }
  
  .date {
    color: #666;
    font-style: italic;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    .about-section {
      padding: 2rem 1rem;
    }
  
    .skills-grid {
      grid-template-columns: 1fr;
    }
  
    h1 {
      font-size: 2rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  }
  </style>