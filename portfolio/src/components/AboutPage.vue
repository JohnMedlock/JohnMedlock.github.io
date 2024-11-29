<template>
  <div id="about" class="about-section">
    <div class="about-container">
      <section class="intro">
        <h1>About Me</h1>
        <div class="bio">
          <div class="bio-content">
            <p>Hi, I'm John Medlock, a Computer Science student at The University of Georgia passionate about creating innovative web solutions. With expertise in modern web technologies, I focus on building scalable and user-friendly applications.</p>
            <p>My journey in tech started with a curiosity for problem-solving and has evolved into a career crafting digital experiences.</p>
          </div>
        </div>
      </section>

      <section class="education">
        <h2>Education</h2>
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>{{ education.degree }}</h3>
            <h4>{{ education.school }}</h4>
            <p class="emphasis">Emphasis: {{ education.emphasis }}</p>
            <p class="date">Graduating: {{ education.graduation }}</p>
            <!-- <p class="gpa">GPA: {{ education.gpa }}</p> -->
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
          items: ['Vue.js', 'React', 'JavaScript', 'HTML/CSS', 'TypeScript', 'Responsive Design']
        },
        {
          title: 'Backend',
          items: ['Node.js', 'Spring-Boot', 'Java', 'C/C++', 'Python', 'SQL', 'Postgres', 'REST APIs']
        },
        {
          title: 'Tools & Others',
          items: ['Git', 'MySQL', 'pgAdmin', 'Postman', 'R', 'Agile/Scrum']
        }
      ],
      education: {
        school: 'University of Georgia',
        degree: 'Bachelor of Science, Computer Science',
        emphasis: 'Software Design',
        graduation: 'December 2025'
        // gpa: '3.65/4.00'
      },
      experience: [
        {
          role: 'Software Engineer Intern',
          company: 'Sepia Innovations',
          location: 'Tokyo, Japan',
          period: 'June 2024 - July 2024',
          description: 'Developing responsive web applications using React and modern JavaScript frameworks. Creating reusable components and optimizing application performance to enhance user experience across platforms.'
        },
        {
          role: 'IT Support Specialist',
          company: 'The University of Georgia College of Agricultural and Environmental Sciences',
          period: '2024 - Present',
          description: 'Helped faculty and staff with their daily technical needs, from software troubleshooting to hardware setup. Worked with a variety of systems and equipment, ensuring everyone has the tools they need to do their jobs effectively. My role involves everything from setting up new computers to solving complex network issues.'
        },
        {
          role: 'Undergraduate Research Assistant',
          company: 'The University of Georgia School of Computing',
          period: '2024 - Present',
          description: 'Working on exciting data prediction project using R and the Shiny framework. Helped create interactive tools that make complex data more accessible and understandable. My work involves both frontend development with React and maintaining our codebase through version control systems.'
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

  .education {
    margin-bottom: 4rem;
  }

  .emphasis {
    color: var(--portal-orange);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .gpa {
    color: var(--portal-blue);
    font-weight: 500;
    margin-top: 0.5rem;
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