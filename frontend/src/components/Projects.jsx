import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Section from './Section';

function Projects({ projects }) {
  const [showFinanceFriendVideo, setShowFinanceFriendVideo] = useState(false);
  const [showCinemaBookingVideo, setShowCinemaBookingVideo] = useState(false);
  const [showWikiTypeDemo, setShowWikiTypeDemo] = useState(false);

  return (
    <Section title="Projects">
      <div className="three-col">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            showVideo={
              project.title === 'WikiType'
                ? showWikiTypeDemo
                : project.title === 'CinemaBooking'
                ? showCinemaBookingVideo
                : showFinanceFriendVideo
            }
            setShowVideo={(show) => {
              if (project.title === 'WikiType') {
                setShowWikiTypeDemo(show);
              } else if (project.title === 'CinemaBooking') {
                setShowCinemaBookingVideo(show);
              } else {
                setShowFinanceFriendVideo(show);
              }
            }}
          />
        ))}
      </div>
    </Section>
  );
}

export default Projects;