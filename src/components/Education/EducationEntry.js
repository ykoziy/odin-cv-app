import React, { Component } from 'react';
import styles from '../../styles/EducationEntry.module.css';

class EducationEntry extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { title, schoolName, dates } = this.props;
    return (
      <article className={styles.container}>
        {' '}
        <div className={styles['left-container']}>
          <p>{title}</p>
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
