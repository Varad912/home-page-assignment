import React, { useState } from 'react';
import styles from './OurProject.module.css';
import { getImageUrl } from '../../utils';

function OurProject() {
 
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

 
  const projects = [
    {
      title: "Genderless Kei - Japan's hot",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam, dolor quas in qui architecto.",
      image: 'our-project/img1.png'
    },
    {
      title: "Better Strategy & Quality",
      description: "Set to launch on the manufacture's new A330neo aircraft in 2017, it's offering lots of",
      image: 'our-project/img2.png'
    },
    {
      title: "Genderless Kei - Japan's hot",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam, dolor quas in qui architecto.",
      image: 'our-project/img3.png'
    }
  ];


  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h4 className={styles.pageTitle}>OUR PROJECT</h4>
        <h1 className={styles.pageHeading}>WHY WE ARE BEST</h1>
        <div className={styles.data}>
          <img src={getImageUrl(projects[selectedProjectIndex].image)} className={styles.image} alt="Project Image" />
          <div className={styles.info}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectBox} onClick={() => handleProjectClick(index)}>
                <h3>{project.title}</h3>
                <h6>{project.description}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProject;
