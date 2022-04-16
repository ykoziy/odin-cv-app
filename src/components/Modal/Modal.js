import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Modal.module.css';
import WorkExperienceModal from './WorkExperienceModal';
import EducationModal from './EducationModal';

class Modal extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {
      modalType,
      isOpen,
      closeModalHandler,
      onSubmitJobEntry,
      entryData,
    } = this.props;
    let modal, heading;
    if (modalType === 'add-work') {
      heading = <h4>Adding work experience</h4>;
      modal = (
        <WorkExperienceModal
          onSubmitJobEntry={onSubmitJobEntry}
          isEditing={false}
        />
      );
    } else if (modalType === 'edit-work') {
      heading = <h4>Editing work experience</h4>;
      modal = (
        <WorkExperienceModal
          onSubmitJobEntry={onSubmitJobEntry}
          isEditing={true}
          entryData={entryData}
        />
      );
    } else if (modalType === 'add-education') {
      heading = <h4>Adding education</h4>;
      modal = <EducationModal isEditing={false} />;
    }
    return ReactDOM.createPortal(
      <div
        className={`${styles['modal-container']} ${
          isOpen ? undefined : 'hidden'
        }`}
      >
        <div className={styles.modal}>
          <div className={styles['modal-toolbar']}>
            {heading}
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
