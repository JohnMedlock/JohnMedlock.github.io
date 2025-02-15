import React from 'react';
import './App.css';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import HonorsAndAwards from './components/HonorsAndAwards';
import LeadershipAndExperience from './components/LeadershipAndExperience';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfo from './components/ProfileInfo';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const projects = [
    {
      title: 'WikiType',
      imageUrl: '/images/wikitype-demo.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      description:
        'WikiType is a Web App that allows you to type out Wikipedia articles in the context of a typing game. You can upload the URL of any Wikipedia page you want to type out and it will be added to your dashboard and then you can test out your typing skills. It tracks metrics such as words per minute, progress through the article, and many more. For the moment, a surprise video will be playing, but soon we will have a demo ready to be displayed.',
      githubUrl: 'https://github.com/dylanwcarter/wikitype',
    },
    {
      title: 'CinemaBooking',
      imageUrl: '/images/CinemaBooking.png',
      videoUrl: 'https://www.youtube.com/embed/lU0N8xuxupw?autoplay=1',
      description:
        'Cinema Booking is a movie ticket booking platform with user and admin roles, built using React, SpringBoot, and Postgres. Users can browse movies, book tickets, manage their profiles, and complete the checkout process. Admins have access to a separate interface for managing movies, users, promotions, schedules, prices, and fees. The app uses React Router for navigation, AuthContext for authentication, and includes pages for user authentication, account management, and error handling.',
      githubUrl: 'https://github.com/jimmymachine/csci_4050',
    },
    {
      title: 'Finance Friend',
      imageUrl: '/images/FinanceFriend.jpg',
      videoUrl: 'https://www.youtube.com/embed/uC2L6qnkAE4?autoplay=1',
      description:
        'Financial Friend is a financial advisement application designed to empower users with personalized, AI-driven insights and interactive tools to achieve their financial goals. By combining a customizable 3D AI advisor, and analytic dashboards, the application provides an engaging and accessible platform for users to help make informed decisions. The application leverages a modern tech stack, including React, Three.js, Node.js, and MongoDB, along with AI/ML technologies like the OpenAI API and Meshy, to deliver a secure and user-friendly experience that makes financial planning more approachable and effective. This was also created for a hackathon.',
      githubUrl: 'https://github.com/JohnMedlock/Finance-Friend',
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <ProfileHeader />
        <ProfileInfo />
        <Education />
        <HonorsAndAwards />
        <Skills />
        <LeadershipAndExperience />
        <Projects projects={projects} />
      </main>
      <Footer />
    </div>
  );
}

export default App;