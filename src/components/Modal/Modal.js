import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Modal.module.css';
import WorkExperienceModal from './WorkExperienceModal';

class Modal extends Component {
  render() {
    const { modalType, isOpen, closeModalHandler } = this.props;
    let modal;
    if (modalType === 'add-work') {
      modal = <WorkExperienceModal />;
    }
    return ReactDOM.createPortal(
      <div
        className={`${styles['modal-container']} ${
          isOpen ? undefined : 'hidden'
        }`}
      >
        <div className={styles.modal}>
          <div className={styles['modal-toolbar']}>
            <button onClick={closeModalHandler}>X</button>
          </div>
          <div className={styles['modal-content']}>{modal}</div>
        </div>
      </div>,
      document.body,
    );
  }
}

export default Modal;
