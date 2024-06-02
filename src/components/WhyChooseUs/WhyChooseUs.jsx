import React from 'react';
import data from '../../data/why_choose_us.json';
import { getImageUrl } from '../../utils';
import styles from './WhyChooseUs.module.css';

function WhyChooseUs() {
  return (
    <section className= {styles.container}>
      <div className= {styles.content}>
        <h4 className= {styles.pageTitle}>WHY CHOOSE US</h4>
        <h1 className= {styles.pageHeading}>WHY WE ARE BEST</h1>
        <div className={styles.mappedData}>
          {data.map((item, index) => (
                <div key={index} className={styles.mappedContent}>
                    <img src={getImageUrl(item.image)} alt={item.title} className={styles.mappedImg} />
                    <h3 className={styles.mappedTitle}>{item.title}</h3>
                    <h6 className={styles.mappedDescription}>{item.description}</h6>
                </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs