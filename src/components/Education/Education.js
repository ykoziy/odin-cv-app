import React, { Component } from 'react';
import styles from '../../styles/Education.module.css';
import EducationEntry from './EducationEntry';
import Modal from '../Modal/Modal';
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalType: 'add-education',
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
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onSubmitEntry = this.onSubmitEntry.bind(this);
    this.onEditEntry = this.onEditEntry.bind(this);
    this.onDeleteEntry = this.onDeleteEntry.bind(this);
  }

  handleAddButtonClick() {
    this.setState({ showModal: true, modalType: 'add-education' });
  }

  handleEditButtonClick(e) {
    console.log('editing education entry');
  }

  onCloseModal() {
    this.setState({ showModal: false });
  }

  onSubmitEntry(e) {
    e.preventDefault();
    let newEntry = {
      key: uniqid(),
      title: e.target['job_title'].value,
      schoolName: e.target['school_name'].value,
    };
    const startDate = e.target['start_date'].value.split('-');
    newEntry.startDate = `${startDate[1]}/${startDate[2]}/${startDate[0]}`;
    if (e.target['end_date'].value) {
      const endDate = e.target['end_date'].value.split('-');
      newEntry.endDate = `${endDate[1]}/${endDate[2]}/${endDate[0]}`;
    } else {
      newEntry.endDate = 'Present';
    }
    this.setState({
      showModal: false,
      education: [newEntry, ...this.state.education],
    });
  }

  onEditEntry(e) {
    console.log('MODAL: editing education entry');
  }

  onDeleteEntry(e) {
    const deletionIndex = Number(
      e.target.parentElement.parentElement.getAttribute('index'),
    );
    const newList = this.state.education.filter(
      (_, idx) => deletionIndex !== idx,
    );
    this.setState({ education: newList });
  }

  renderEntry(education, index) {
    return (
      <EducationEntry
        key={education.key}
        index={index}
        title={education.title}
        schoolName={education.schoolName}
        dates={`${education.startDate} - ${education.endDate}`}
        onDeleteEntry={this.onDeleteEntry}
        onEditEntry={this.handleEditButtonClick}
      />
    );
  }

  render() {
    const educationList = this.state.education.map((education, index) =>
      this.renderEntry(education, index),
    );
    let modal;
    if (this.state.modalType === 'add-education') {
      modal = (
        <Modal
          modalType={this.state.modalType}
          isOpen={this.state.showModal}
          closeModalHandler={this.onCloseModal}
          onSubmitEntry={this.onSubmitEntry}
        />
      );
    } else if (this.state.modalType === 'edit-education') {
    }
    return (
      <section className={styles.education}>
        {modal}
        <h2>Education</h2>
        <button onClick={this.handleAddButtonClick}>Add education</button>
        {educationList}
      </section>
    );
  }
}

export default Education;
