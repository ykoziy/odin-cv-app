import React, { Component } from 'react';
import styles from '../../styles/ExperienceEntry.module.css';

class ExperienceEntry extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { jobTitle, companyName, description, dates, index, onDeleteEntry } =
      this.props;
    return (
      <article className={styles.container} index={index}>
        <div className={styles['left-container']}>
          <p>{jobTitle}</p>
          <button onClick={onDeleteEntry}>Delete</button>
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
