import React from 'react';
import "./ProjectCardStyle.css";
import Tilt from 'react-parallax-tilt';

export default function ProjectCard(props) {
  const handleOnClick = (link) => {
    window.open(link);
  }

  return (
    <div className='project-window px-20 md:px-20 mb-3 md:mb-6 mt-3 md:mt-10' id={props.id}>
      <div className={`project-wrapper ${props.className}`}>
        <div className="about-project mt-0">
          <div className="project-title">{props.projectTitle}</div>
          <div className="desc">{props.projectDesc}</div>
        </div>
        <Tilt className= "project-img" gyroscope={true}>
          <img src={props.projectImgUrl} alt="Displaying Project" />
        </Tilt>
      </div>
    </div>
  )
}
