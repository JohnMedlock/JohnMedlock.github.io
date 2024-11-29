<template>
  <div id="projects" class="projects-section">
    <h1>My Projects</h1>
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <div class="project-content">
          <div class="project-header">
            <h3>{{ project.title }}</h3>
            <div class="project-links">
              <a :href="project.github" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i> GitHub
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
          <p class="project-description">{{ project.description }}</p>
          <div class="features-list" v-if="project.features">
            <span v-for="(feature, index) in project.features" :key="index" class="feature">
              <i class="fas fa-check"></i> {{ feature }}
            </span>
          </div>
          <div class="tech-stack">
            <span v-for="(tech, index) in project.technologies" :key="index">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'WikiType',
          description: 'A dynamic web application that transforms Wikipedia articles into engaging typing exercises. Users can practice typing with any Wikipedia article while tracking their performance and customizing their experience.',
          github: 'https://github.com/dylancrter/wikitype',
          demo: 'https://wikitype.demo.com',
          features: [
            'Real-time typing metrics',
            'Progress tracking',
            'Theme customization',
            'Wikipedia integration',
            'Save and resume sessions'
          ],
          technologies: [
            'React',
            'TypeScript',
            'Context API',
            'SCSS',
            'React Router'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-section {
  padding: 4rem 2rem;
  background: linear-gradient(45deg, rgba(255, 105, 52, 0.1), rgba(0, 163, 225, 0.1));
  min-height: 100vh;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-description {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--portal-blue);
}

.feature i {
  color: var(--portal-orange);
}

.tech-stack {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-stack span {
  background: linear-gradient(135deg, var(--portal-orange), var(--portal-blue));
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.tech-stack span:hover {
  transform: translateY(-2px);
}
  
  h1 {
    text-align: center;
    color: var(--portal-orange);
    margin-bottom: 3rem;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .project-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
  }
  
  .project-content {
    padding: 1.5rem;
  }
  
  .project-content h3 {
    color: var(--portal-blue);
    margin-bottom: 1rem;
  }
  
  .project-links {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }
  
  .project-links a {
    color: var(--portal-orange);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
  }
  
  .project-links a:hover {
    color: var(--portal-blue);
  }
  
  @media (max-width: 768px) {
    .projects-section {
      padding: 2rem 1rem;
    }
  }
  </style>