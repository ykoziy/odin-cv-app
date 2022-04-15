import React, { Component } from 'react';
import styles from '../../styles/Education.module.css';
import EducationEntry from './EducationEntry';
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          key: uniqid(),
          title: 'education title 1',
          schoolName: 'school 1',
          startDate: 'start date',
          endDate: 'end date',
        },
        {
          key: uniqid(),
          title: 'education title 2',
          schoolName: 'school 2',
          startDate: 'start date',
          endDate: 'end date',
        },
      ],
    };
  }

  renderEntry(education) {
    return (
      <EducationEntry
        key={education.key}
        title={education.title}
        schoolName={education.schoolName}
        dates={`${education.startDate} - ${education.endDate}`}
      />
    );
  }

  render() {
    const educationList = this.state.education.map((education) =>
      this.renderEntry(education),
    );
    return (
      <section className={styles.education}>
        <h2>Education</h2>
        {educationList}
      </section>
    );
  }
}

export default Education;
