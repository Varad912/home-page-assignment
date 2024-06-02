import React from 'react'
import styles from './Feedback.module.css';

function Feedback() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>CLIENT'S FEEDBACK</h3>
        <h1 className={styles.heading}>PEOPLE SAY'S ABOUT US !</h1>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos nostrum libero quia fugiat distinctio quidem quod atque sit. Blanditiis culpa nobis nulla.</h6>
        <div className={styles.personDetail}>
        <h6 className={styles.name}>JANNAT TUMPA </h6>
        <h6 className={styles.post}>- COO, AMERIMAR ENTERPRISES, INC</h6>
        </div>
        
        

      </div>
      
    </section>
    
  )
}

export default Feedback