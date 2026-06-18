import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import style from './Project.module.css'

export default function Project({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    // Desktop hover
    if (window.innerWidth > 768) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    // Desktop hover
    if (window.innerWidth > 768) {
      setIsExpanded(false);
    }
  };

  const handleClick = () => {
    // Mobile tap
    if (window.innerWidth <= 768) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`${style.projectCard} ${isExpanded ? style.expanded : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={style.cardContent}>
        <h5 className={style.projectTitle}>{data.name}</h5>

        <div className={style.descriptionSection}>
          <p className={style.projectDescription}>{data.des}</p>
        </div>

        <div className={style.expandedContent}>
          <img
            className={style.projectImage}
            src={data.img}
            alt={data.name}
          />

          <div className={style.buttonGroup}>
            <a
              className={style.linkButton}
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={style.btn} variant="primary">
                GitHub
              </Button>
            </a>

            {data.liveLink !== 'none' && (
              <a
                className={style.linkButton}
                href={data.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className={style.btn} variant="primary">
                  Live Site
                </Button>
              </a>
            )}
          </div>
        </div>

        <div className={style.footer}>
          <small className={style.creationDate}>{data.creationDate}</small>
        </div>

        {!isExpanded && (
          <div className={style.interactionCue}>
            <span className={style.cueText}>
              {window.innerWidth > 768 ? 'Hover to expand' : 'Tap to expand'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
