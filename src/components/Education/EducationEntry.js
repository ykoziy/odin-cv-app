import React, { Component } from 'react';
import styles from '../../styles/EducationEntry.module.css';

class EducationEntry extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { title, schoolName, dates, index, onDeleteEntry, onEditEntry } =
      this.props;
    return (
      <article className={styles.container} index={index}>
        <div className={styles['left-container']}>
          <p>{title}</p>
          <button onClick={onDeleteEntry}>Delete</button>
          <button onClick={onEditEntry}>Edit</button>
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
