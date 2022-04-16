import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import sharedStyles from '../../styles/SharedStyles.module.css';
import styles from '../../styles/Modal.module.css';
import ModalContent from './ModalContent';

class Modal extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { modalType, isOpen, closeModalHandler, onSubmitEntry, entryData } =
      this.props;
    let modal, heading;
    if (modalType === 'add-work') {
      heading = <h4>Adding work experience</h4>;
      modal = (
        <ModalContent
          onSubmitEntry={onSubmitEntry}
          isEditing={false}
          modalType="work"
        />
      );
    } else if (modalType === 'edit-work') {
      heading = <h4>Editing work experience</h4>;
      modal = (
        <ModalContent
          onSubmitEntry={onSubmitEntry}
          isEditing={true}
          modalType="work"
          entryData={entryData}
        />
      );
    } else if (modalType === 'add-education') {
      heading = <h4>Adding education</h4>;
      modal = (
        <ModalContent
          onSubmitEntry={onSubmitEntry}
          isEditing={false}
          modalType="education"
        />
      );
    } else if (modalType === 'edit-education') {
      heading = <h4>Editing education</h4>;
      modal = (
        <ModalContent
          onSubmitEntry={onSubmitEntry}
          isEditing={true}
          modalType="education"
          entryData={entryData}
        />
      );
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
            <button
              className={sharedStyles['close-btn']}
              onClick={closeModalHandler}
            >
              <FontAwesomeIcon icon={faSquareXmark} size="2x" />
            </button>
          </div>
          <div className={styles['modal-content']}>{modal}</div>
        </div>
      </div>,
      document.body,
    );
  }
}

export default Modal;
