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
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.onEditEntry = this.onEditEntry.bind(this);
    this.onDeleteEntry = this.onDeleteEntry.bind(this);
  }

  handleAddButtonClick() {
    console.log('Adding education');
  }

  handleEditButtonClick(e) {
    console.log('editing education entry');
  }

  onDeleteEntry(e) {
    console.log('deleting education entry');
  }

  onEditEntry(e) {
    console.log('MODAL: editing education entry');
  }

  renderEntry(education) {
    return (
      <EducationEntry
        key={education.key}
        title={education.title}
        schoolName={education.schoolName}
        dates={`${education.startDate} - ${education.endDate}`}
        onDeleteEntry={this.onDeleteEntry}
        onEditEntry={this.handleEditButtonClick}
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
        <button onClick={this.handleAddButtonClick}>Add education</button>
        {educationList}
      </section>
    );
  }
}

export default Education;
