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
          startDate: 'start date',
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
          startDate: 'start date',
          endDate: 'end date',
        },
      ],
    };
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  handleAddButtonClick() {
    this.setState({ showModal: true });
  }

  onCloseModal() {
    this.setState({ showModal: false });
  }

  renderEntry(job) {
    return (
      <ExperienceEntry
        key={job.key}
        jobTitle={job.title}
        companyName={job.company}
        description={job.description}
        dates={`${job.startDate} - ${job.endDate}`}
      />
    );
  }

  render() {
    const jobs = this.state.jobs.map((job) => this.renderEntry(job));
    return (
      <section className={styles['work-experience']}>
        <Modal
          modalType="add-work"
          isOpen={this.state.showModal}
          closeModalHandler={this.onCloseModal}
        />
        <h2>Work Experience</h2>
        <button onClick={this.handleAddButtonClick}>Add experience</button>
        {jobs}
      </section>
    );
  }
}

export default WorkExperience;
