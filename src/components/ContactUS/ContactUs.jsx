import React from 'react';
import Modal from 'react-modal';
import { getImageUrl } from '../../utils';
import styles from './ContactUs.module.css';

function ContactUs() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>AWARD WINNING</h3>
        <h1 className={styles.heading}>DIGITAL MARKETING AGENCY</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestiae totam doloremque voluptatem quis minus quae, magnam velit consectetur commodi ullam, vero 
        </p>
        <button className={styles.contactBtn} onClick={openModal}>CONTACT US</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
          contentLabel="Contact Modal"
        >
          <button className={styles.closeButton} onClick={closeModal}>×</button>
          <h3>Talk to us</h3>
          <form className={styles.form} action='https://getform.io/f/wbrkmexa' method='POST'>
            <label htmlFor="email">Work email*</label>
            <input type="email" id="email" name="email" />
            <div className={styles.names}>
              <div>
                <label htmlFor="firstName">First name*</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div>
                <label htmlFor="lastName">Last name*</label>
                <input type="text" id="lastName" name="lastName" required/>
              </div>
            </div>
            <div className={styles.checkboxContent}>
            <input type='checkbox' id='checkbox' name='checkbox'  required></input>
            <label  htmlFor="checkbox">I agree to Fyle's terms and conditions, and provide consent to send me communication</label>
            
            </div>
            <button type="submit">Contact Us</button>
          </form>
        </Modal>
      </div>
      <img src={getImageUrl('contact/model6.png')} alt='model img' className={styles.modelImg} />
    </section>
  );
}

export default ContactUs;
