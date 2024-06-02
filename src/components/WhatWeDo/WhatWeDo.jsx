import React, { useState } from 'react';
import imageData from '../../data/images.json';
import styles from './WhatWeDo.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImageUrl } from '../../utils';

function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2100,
    rtl: true,
  };

  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };

  const handleImageLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>WHAT WE DO</h3>
        <div className={styles.details}>
          <h1 className={styles.heading}>SERVICES PROVIDE FOR YOU</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde nesciunt eligendi minima ea in hic tempora quos fugiat. </p>
        </div>

        <div className={styles.imgSection}>
          <Slider {...settings} >
            {
              imageData.map((image, index) => (
                <div 
                  className={styles.images} 
                  key={index} 
                  onMouseEnter={() => handleImageHover(index)} 
                  onMouseLeave={handleImageLeave}
                >
                  <div className={styles.image}>
                    {hoveredIndex === index ? 
                      <div className={styles.design}>
                        <img
                         src={getImageUrl('what-we-do/icon2.png')}
                         alt='icon image'
                         className={styles.icon}
                         />
                         <h4>WEB DEVELOPMENT</h4>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptates provident!</p>
                         <button
                         className={styles.readMoreBtn}
                         onClick={() => window.open('https://www.fylehq.com/', '_blank')}
                         >
                          <span className={styles.btnText}>Read More →</span>
                         </button>
                      </div> :
                      <img src={getImageUrl(image.images)} alt='no img'/>
                    }
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
