import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import sharedStyles from '../../styles/SharedStyles.module.css';
import styles from '../../styles/ExperienceEntry.module.css';

const ExperienceEntry = ({
  jobTitle,
  companyName,
  description,
  dates,
  index,
  onDeleteEntry,
  onEditEntry,
  isEditingCv,
}) => {
  const renderEditButtons = () => {
    if (isEditingCv) {
      return (
        <React.Fragment>
          <button
            className={sharedStyles['delete-btn']}
            onClick={onDeleteEntry}
          >
            <FontAwesomeIcon icon={faSquareMinus} size="lg" />
          </button>
          <button className={sharedStyles['edit-btn']} onClick={onEditEntry}>
            <FontAwesomeIcon icon={faSquarePen} size="lg" />
          </button>
        </React.Fragment>
      );
    }
  };

  return (
    <article className={styles.container} index={index}>
      <div className={styles['left-container']}>
        <p className={sharedStyles['entry-title']}>{jobTitle}</p>
        {renderEditButtons()}
      </div>
      <div className={styles['right-container']}>
        <p>{companyName}</p>
        <p>{dates}</p>
      </div>
      <div className={styles['bottom-container']}>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default ExperienceEntry;
