import React, { Component } from 'react';
import styles from '../../styles/ExperienceEntry.module.css';

class ExperienceEntry extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { jobTitle, companyName, description, dates } = this.props;
    return (
      <article className={styles.container}>
        <div className={styles['left-container']}>
          <p>{jobTitle}</p>
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
