import React from 'react';
import './App.css';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfo from './components/ProfileInfo';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProfileHeader />
        <ProfileInfo />
        <Section title="Education">
          <p>
            University of Georgia<br />
            Bachelor of Science, Computer Science<br />
            Certificate in New Media<br />
            Expected Graduation: May 2026
          </p>
        </Section>
        <Section title="Honors and Awards">
          <dl>
            <dt>Zell Miller Scholarship Recipient</dt>
            <dd>University of Georgia, 2022 – Present</dd>
            <dt>Star Sailor Award</dt>
            <dd>University of Georgia Sailing Club, 2023</dd>
          </dl>
        </Section>
        <Section title="Skills">
          <ul>
            <li>Programming Languages: C, C++, C#, Java, Swift, Python, R, HTML, CSS, JavaScript</li>
            <li>Database: MySQL, Postgres, SwiftData</li>
            <li>Web Technologies: React, Shiny</li>
            <li>Tools: Git, VS Code, Eclipse</li>
            <li>Soft Skills: Team Management, Project Progression, Troubleshooting</li>
          </ul>
        </Section>
        <Section title="Leadership and Experience">
          <dl>
            <dt>
              <a href="https://oit.caes.uga.edu/" target="_blank" rel="noopener noreferrer">College of Agriculture and Environmental Sciences</a>
              <br />Information Technology Support Specialist, Athens, GA
            </dt>
            <dd>August 2024 - Present</dd>
            <dt>
              <a href="https://computing.uga.edu/" target="_blank" rel="noopener noreferrer">School of Computing</a>
              <br />Undergraduate Research Assistant, Athens, GA
            </dt>
            <dd>January 2024 - Present</dd>
            <dt>
              <a href="https://sepiainnovations.com/" target="_blank" rel="noopener noreferrer">Sepia Innovations</a>
              <br />Software Engineer Intern, Tokyo, Japan
            </dt>
            <dd>June 2024 - July 2024</dd>
          </dl>
        </Section>
        <Section title="Projects">
          <div className="three-col">
            <div className="project-card">
              <div className="card-title-bar">
                <h3>WikiType</h3>
              </div>
              <div className="card-content">
                <img src="/images/wikitype-demo.jpg" alt="WikiType Demo" className="project-demo" />
                <ul>
                  <li>Engineered a full-stack application using React for the frontend and Go controllers for the backend, transforming Wikipedia articles into an interactive typing game.</li>
                  <li>Integrated the Wikipedia API to fetch and process content from 6,000,000+ articles, utilizing TypeScript and Node.js to ensure efficient data handling.</li>
                  <li>Designed and deployed a responsive UI/UX with React, ensuring seamless accessibility across devices.</li>
                </ul>
                <a href="https://github.com/dylanwcarter/wikitype" className="win95-button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <div className="card-title-bar">
                <h3>CinemaBooking</h3>
              </div>
              <div className="card-content">
                <img src="/images/cinemabooking-demo.jpg" alt="CinemaBooking Demo" className="project-demo" />
                <ul>
                  <li>Developed a cinema booking system using SpringBoot, Postgres, and React, enabling users to book tickets, view showtimes, and manage reservations.</li>
                  <li>Implemented a relational database schema in Postgres to store user information, movie details, promos, and booking history.</li>
                  <li>Designed a user-friendly interface with React, allowing users to navigate through the application with ease.</li>
                </ul>
                <a href="https://github.com/jimmymachine/csci_4050" className="win95-button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <div className="card-title-bar">
                <h3>Finance Friend</h3>
              </div>
              <div className="card-content">
                <img src="/images/Finance-Friend-demo.png" alt="Finance Friend Demo" className="project-demo" />
                <p>An AI-powered financial advisor that combines personalized guidance with interactive 3D visualization.</p>
                <a href="https://github.com/JohnMedlock/Portfolio" className="win95-button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;