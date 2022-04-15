import React, { Component } from 'react';
import styles from '../../styles/WorkExperience.module.css';
import ExperienceEntry from './ExperienceEntry';
import Modal from '../Modal/Modal';
import uniqid from 'uniqid';

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
    this.onSubmitJobEntry = this.onSubmitJobEntry.bind(this);
    this.onEditJobEntry = this.onEditJobEntry.bind(this);
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

  onSubmitJobEntry(e) {
    e.preventDefault();
    let newEntry = {
      key: uniqid(),
      title: e.target['job_title'].value,
      company: e.target['company_name'].value,
      description: e.target['job_description'].value,
    };
    const startDate = e.target['start_date'].value.split('-');
    newEntry.startDate = `${startDate[1]}/${startDate[2]}/${startDate[0]}`;
    if (e.target['end_date'].value) {
      const endDate = e.target['end_date'].value.split('-');
      newEntry.endDate = `${endDate[1]}/${endDate[2]}/${endDate[0]}`;
    } else {
      newEntry.endDate = 'Present';
    }
    this.setState({ showModal: false, jobs: [newEntry, ...this.state.jobs] });
  }

  onEditJobEntry(e) {
    e.preventDefault();
    const editIndex = Number(
      e.target.parentElement.parentElement.getAttribute('index'),
    );

    const newDates = {};
    const startDate = e.target['start_date'].value.split('-');
    newDates.startDate = `${startDate[1]}/${startDate[2]}/${startDate[0]}`;
    if (e.target['end_date'].value) {
      const endDate = e.target['end_date'].value.split('-');
      newDates.endDate = `${endDate[1]}/${endDate[2]}/${endDate[0]}`;
    } else {
      newDates.endDate = 'Present';
    }

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
          onSubmitJobEntry={this.onSubmitJobEntry}
        />
      );
    } else if (this.state.modalType === 'edit-work') {
      modal = (
        <Modal
          modalType={this.state.modalType}
          isOpen={this.state.showModal}
          closeModalHandler={this.onCloseModal}
          onSubmitJobEntry={this.onEditJobEntry}
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
