import React, { Component } from 'react';
import styles from '../../styles/Education.module.css';
import EducationEntry from './EducationEntry';

class Education extends Component {
  render() {
    return (
      <section className={styles.education}>
        <h2>Education</h2>
        <EducationEntry
          title="education title 1"
          schoolName="school 1"
          dates="start date - end date"
        />
        <EducationEntry
          title="education title 2"
          schoolName="school 2"
          dates="start date - end date"
        />
      </section>
    );
  }
}

export default Education;
