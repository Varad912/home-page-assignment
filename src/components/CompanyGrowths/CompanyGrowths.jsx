import React from 'react';
import styles from './CompanyGrowths.module.css'
import growthData from '../../data/company_growth.json';
import { getImageUrl } from '../../utils';

function CompanyGrowths() {

    

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>EXPERTS GROWTHS</h3>
        <h1 className={styles.heading}>OUR COMPANY GROWTH</h1>
        <div className={styles.boxContainer}>
          {growthData.map((item, index) => (
            <div key={index} className={styles.box}>
              <img src={getImageUrl(item.icons)} alt={`Icon ${index}`} className={styles.icon} />
              <h3 className={styles.number}>{item.numbers}</h3>
              <p className={styles.about}>{item.about}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default CompanyGrowths