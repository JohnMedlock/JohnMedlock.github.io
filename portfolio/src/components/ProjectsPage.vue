<template>
    <div class="projects-section">
      <h1>My Projects</h1>
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-links">
              <a :href="project.github" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i> GitHub
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectsPage', // Fixed naming convention
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'Project One',
            description: 'Description of project one',
            github: 'https://github.com/yourusername/project1',
            demo: 'https://demo-link.com'
          },
          // Add more projects here
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .projects-section {
    padding: 4rem 2rem;
    background: linear-gradient(45deg, rgba(255, 105, 52, 0.1), rgba(0, 163, 225, 0.1));
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