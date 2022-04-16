import React, { Component } from 'react';
import styles from '../../styles/Education.module.css';
import EducationEntry from './EducationEntry';
import Modal from '../Modal/Modal';
import uniqid from 'uniqid';
import { convertInputDates } from '../../util/util.js';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalType: 'add-education',
      editIndex: undefined,
      education: [
        {
          key: uniqid(),
          title: 'education title 1',
          schoolName: 'school 1',
          startDate: '01/01/2002',
          endDate: 'Present',
        },
        {
          key: uniqid(),
          title: 'education title 2',
          schoolName: 'school 2',
          startDate: '01/01/2000',
          endDate: '12/30/2002',
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
    const index = Number(
      e.target.parentElement.parentElement.getAttribute('index'),
    );
    this.setState({
      showModal: true,
      modalType: 'edit-education',
      editIndex: index,
    });
  }

  onCloseModal() {
    this.setState({ showModal: false });
  }

  onSubmitEntry(e) {
    e.preventDefault();
    let newEntry = {
      key: uniqid(),
      title: e.target['education_title'].value,
      schoolName: e.target['school_name'].value,
      ...convertInputDates(
        e.target['start_date'].value,
        e.target['end_date'].value,
      ),
    };

    this.setState({
      showModal: false,
      education: [newEntry, ...this.state.education],
    });
  }

  onEditEntry(e) {
    e.preventDefault();
    const editIndex = Number(
      e.target.parentElement.parentElement.getAttribute('index'),
    );

    const newDates = {
      ...convertInputDates(
        e.target['start_date'].value,
        e.target['end_date'].value,
      ),
    };

    const newList = this.state.education.map((education, index) => {
      if (index === editIndex) {
        const updatedEducation = {
          ...education,
          ...newDates,
          title: e.target['education_title'].value,
          schoolName: e.target['school_name'].value,
        };
        return updatedEducation;
      }
      return education;
    });
    this.setState({ showModal: false, education: newList });
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
      modal = (
        <Modal
          modalType={this.state.modalType}
          isOpen={this.state.showModal}
          closeModalHandler={this.onCloseModal}
          onSubmitEntry={this.onEditEntry}
          entryData={this.state.education[this.state.editIndex]}
        />
      );
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
