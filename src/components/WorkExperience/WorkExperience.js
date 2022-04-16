import React, { Component } from 'react';
import styles from '../../styles/WorkExperience.module.css';
import ExperienceEntry from './ExperienceEntry';
import Modal from '../Modal/Modal';
import uniqid from 'uniqid';
import { convertInputDates } from '../../util/util.js';

class WorkExperience extends Component {
  constructor(props) {
    super();
    this.state = {
      showModal: false,
      modalType: 'add-work',
      editIndex: undefined,
      jobs: [
        {
          key: uniqid(),
          title: 'Job Title 1',
          company: 'Company Name 1',
          description: `
          Porttitor massa id neque aliquam. Ac felis donec et odio
          pellentesque diam volutpat. Blandit massa enim nec dui nunc mattis
          enim ut tellus. Nisl suscipit adipiscing bibendum est ultricies. Sed
          nisi lacus sed viverra tellus in hac.Enim tortor at auctor urna nunc
          id cursus. In vitae turpis massa sed elementum tempus egestas. Vitae
          tempus quam pellentesque nec nam aliquam.
          `,
          startDate: '01/01/2002',
          endDate: 'Present',
        },
        {
          key: uniqid(),
          title: 'Job Title 2',
          company: 'Company Name 2',
          description: `
          Porttitor massa id neque aliquam. Ac felis donec et odio
          pellentesque diam volutpat. Blandit massa enim nec dui nunc mattis
          enim ut tellus. Nisl suscipit adipiscing bibendum est ultricies. Sed
          nisi lacus sed viverra tellus in hac.Enim tortor at auctor urna nunc
          id cursus. In vitae turpis massa sed elementum tempus egestas. Vitae
          tempus quam pellentesque nec nam aliquam.
          `,
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
    this.setState({ showModal: true, modalType: 'add-work' });
  }

  handleEditButtonClick(e) {
    const index = Number(
      e.target.parentElement.parentElement.getAttribute('index'),
    );
    this.setState({
      showModal: true,
      modalType: 'edit-work',
      editIndex: index,
    });
  }

  onCloseModal() {
    this.setState({ showModal: false });
  }

  onSubmitEntry(e) {
    console.log('adding');
    e.preventDefault();
    let newEntry = {
      key: uniqid(),
      title: e.target['job_title'].value,
      company: e.target['company_name'].value,
      description: e.target['job_description'].value,
      ...convertInputDates(
        e.target['start_date'].value,
        e.target['end_date'].value,
      ),
    };
    this.setState({ showModal: false, jobs: [newEntry, ...this.state.jobs] });
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

    const newJobs = this.state.jobs.map((job, index) => {
      if (index === editIndex) {
        const updatedJob = {
          ...job,
          ...newDates,
          title: e.target['job_title'].value,
          company: e.target['company_name'].value,
          description: e.target['job_description'].value,
        };
        return updatedJob;
      }
      return job;
    });
    this.setState({ showModal: false, jobs: newJobs });
  }

  onDeleteEntry(e) {
    const deletionIndex = Number(
      e.target.parentElement.parentElement.getAttribute('index'),
    );
    const newJobs = this.state.jobs.filter((_, idx) => deletionIndex !== idx);
    this.setState({ jobs: newJobs });
  }

  renderEntry(job, index) {
    return (
      <ExperienceEntry
        key={job.key}
        index={index}
        jobTitle={job.title}
        companyName={job.company}
        description={job.description}
        dates={`${job.startDate} - ${job.endDate}`}
        onDeleteEntry={this.onDeleteEntry}
        onEditEntry={this.handleEditButtonClick}
      />
    );
  }

  render() {
    const jobs = this.state.jobs.map((job, index) =>
      this.renderEntry(job, index),
    );
    let modal;
    if (this.state.modalType === 'add-work') {
      modal = (
        <Modal
          modalType={this.state.modalType}
          isOpen={this.state.showModal}
          closeModalHandler={this.onCloseModal}
          onSubmitEntry={this.onSubmitEntry}
        />
      );
    } else if (this.state.modalType === 'edit-work') {
      modal = (
        <Modal
          modalType={this.state.modalType}
          isOpen={this.state.showModal}
          closeModalHandler={this.onCloseModal}
          onSubmitEntry={this.onEditEntry}
          entryData={this.state.jobs[this.state.editIndex]}
        />
      );
    }

    return (
      <section className={styles['work-experience']}>
        {modal}
        <h2>Work Experience</h2>
        <button onClick={this.handleAddButtonClick}>Add experience</button>
        {jobs}
      </section>
    );
  }
}

export default WorkExperience;
