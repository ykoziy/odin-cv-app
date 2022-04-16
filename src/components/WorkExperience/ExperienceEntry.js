import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import sharedStyles from '../../styles/SharedStyles.module.css';
import styles from '../../styles/ExperienceEntry.module.css';

class ExperienceEntry extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {
      jobTitle,
      companyName,
      description,
      dates,
      index,
      onDeleteEntry,
      onEditEntry,
    } = this.props;
    return (
      <article className={styles.container} index={index}>
        <div className={styles['left-container']}>
          <p>{jobTitle}</p>
          <button
            className={sharedStyles['delete-btn']}
            onClick={onDeleteEntry}
          >
            <FontAwesomeIcon icon={faSquareMinus} size="lg" />
          </button>
          <button className={sharedStyles['edit-btn']} onClick={onEditEntry}>
            <FontAwesomeIcon icon={faSquarePen} size="lg" />
          </button>
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
  }
}

export default ExperienceEntry;
