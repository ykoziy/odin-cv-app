import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import sharedStyles from '../../styles/SharedStyles.module.css';
import styles from '../../styles/Modal.module.css';
import ModalContent from './ModalContent';

const Modal = ({
  modalType,
  isOpen,
  closeModalHandler,
  onSubmitEntry,
  entryData,
}) => {
  const renderEditModal = () => {
    if (modalType.endsWith('-work')) {
      return (
        <ModalContent
          onSubmitEntry={onSubmitEntry}
          isEditing={true}
          modalType="work"
          entryData={entryData}
        />
      );
    } else if (modalType.endsWith('-education')) {
      return (
        <ModalContent
          onSubmitEntry={onSubmitEntry}
          isEditing={true}
          modalType="education"
          entryData={entryData}
        />
      );
    }
  };

  const renderAddModal = () => {
    if (modalType.endsWith('-work')) {
      return (
        <ModalContent
          onSubmitEntry={onSubmitEntry}
          isEditing={false}
          modalType="work"
        />
      );
    } else if (modalType.endsWith('-education')) {
      return (
        <ModalContent
          onSubmitEntry={onSubmitEntry}
          isEditing={false}
          modalType="education"
        />
      );
    }
  };

  const renderHeading = () => {
    let heading = '';
    if (modalType.startsWith('add-')) {
      heading += 'Adding ';
    } else if (modalType.startsWith('edit-')) {
      heading += 'Editing ';
    } else if (modalType === 'welcome') {
      heading += 'Welcome';
    }
    if (modalType.endsWith('-work')) {
      heading += ' work experience';
    } else if (modalType.endsWith('-education')) {
      heading += ' education';
    }
    return <h4>{heading}</h4>;
  };

  const renderModal = () => {
    if (modalType.startsWith('add-')) {
      return renderAddModal();
    } else if (modalType.startsWith('edit-')) {
      return renderEditModal();
    } else if (modalType === 'welcome') {
      return <ModalContent modalType="welcome" />;
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`${styles['modal-container']} ${
        isOpen ? undefined : 'hidden'
      }`}
    >
      <div className={styles.modal}>
        <div className={styles['modal-toolbar']}>
          {renderHeading()}
          <button
            className={sharedStyles['close-btn']}
            onClick={closeModalHandler}
          >
            <FontAwesomeIcon icon={faSquareXmark} size="2x" />
          </button>
        </div>
        <div className={styles['modal-content']}>{renderModal()}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
