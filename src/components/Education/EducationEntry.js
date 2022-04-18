import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import sharedStyles from '../../styles/SharedStyles.module.css';
import styles from '../../styles/EducationEntry.module.css';

class EducationEntry extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {
      title,
      schoolName,
      dates,
      index,
      onDeleteEntry,
      onEditEntry,
      isEditingCv,
    } = this.props;

    let editElements;
    if (isEditingCv) {
      editElements = (
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

    return (
      <article className={styles.container} index={index}>
        <div className={styles['left-container']}>
          <p>{title}</p>
          {editElements}
        </div>
        <div className={styles['right-container']}>
          <p>{schoolName}</p>
          <p>{dates}</p>
        </div>
      </article>
    );
  }
}

export default EducationEntry;
