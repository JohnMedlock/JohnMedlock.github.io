import React from 'react';

function ProjectCard({ project, showVideo, setShowVideo }) {
  return (
    <div className="project-card">
      <div className="card-title-bar">
        <h3>{project.title}</h3>
      </div>
      <div className="card-content">
        {showVideo ? (
          <iframe
            width="560"
            height="315"
            src={project.videoUrl}
            title={`${project.title} Demo`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          <div
            className="video-placeholder"
            onClick={() => setShowVideo(true)}
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              width: '100%',
              height: '315px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer',
              border: '2px solid #404040',
              boxShadow: 'inset 1px 1px #dfdfdf, inset -1px -1px #808080',
              marginBottom: '12px',
            }}
          >
            <div className="play-button">▶</div>
          </div>
        )}
        <p>{project.description}</p>
        <a href={project.githubUrl} className="win95-button" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;