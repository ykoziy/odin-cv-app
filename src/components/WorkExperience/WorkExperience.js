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
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onSubmitJobEntry = this.onSubmitJobEntry.bind(this);
    this.onDeleteEntry = this.onDeleteEntry.bind(this);
  }

  handleAddButtonClick() {
    this.setState({ showModal: true });
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
      />
    );
  }

  render() {
    const jobs = this.state.jobs.map((job, index) =>
      this.renderEntry(job, index),
    );
    return (
      <section className={styles['work-experience']}>
        <Modal
          modalType="add-work"
          isOpen={this.state.showModal}
          closeModalHandler={this.onCloseModal}
          onSubmitJobEntry={this.onSubmitJobEntry}
        />
        <h2>Work Experience</h2>
        <button onClick={this.handleAddButtonClick}>Add experience</button>
        {jobs}
      </section>
    );
  }
}

export default WorkExperience;
