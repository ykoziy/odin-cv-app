import React, { Component, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/WorkExperience.module.css';
import sharedStyles from '../../styles/SharedStyles.module.css';
import ExperienceEntry from './ExperienceEntry';
import Modal from '../Modal/Modal';
import uniqid from 'uniqid';
import { convertInputDates } from '../../util/util.js';

const WorkExperience = ({ isEditingCv }) => {
  const jobsArray = [
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
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add-work');
  const [editIndex, setEditIndex] = useState(undefined);
  const [jobs, setJobs] = useState(jobsArray);

  const handleAddButtonClick = () => {
    setShowModal(true);
    setModalType('add-work');
  };

  const handleEditButtonClick = (e) => {
    const index = Number(
      e.target.parentElement.parentElement.getAttribute('index'),
    );
    setShowModal(true);
    setModalType('edit-work');
    setEditIndex(index);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onSubmitEntry = (e) => {
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
    setShowModal(false);
    setJobs([newEntry, ...jobs]);
    //this.setState({ showModal: false, jobs: [newEntry, ...this.state.jobs] });
  };

  const onEditEntry = (e) => {
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

    const newJobs = jobs.map((job, index) => {
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
    setShowModal(false);
    setJobs(newJobs);
    //this.setState({ showModal: false, jobs: newJobs });
  };

  const onDeleteEntry = (e) => {
    const deletionIndex = Number(
      e.target.parentElement.parentElement.getAttribute('index'),
    );
    const newJobs = jobs.filter((_, idx) => deletionIndex !== idx);
    setJobs(newJobs);
  };

  const renderEntry = (job, index) => {
    return (
      <ExperienceEntry
        key={job.key}
        index={index}
        jobTitle={job.title}
        companyName={job.company}
        description={job.description}
        dates={`${job.startDate} - ${job.endDate}`}
        onDeleteEntry={onDeleteEntry}
        onEditEntry={handleEditButtonClick}
        isEditingCv={isEditingCv}
      />
    );
  };

  const jobsList = jobs.map((job, index) => renderEntry(job, index));

  const getModal = () => {
    let modal;
    if (modalType === 'add-work') {
      modal = (
        <Modal
          modalType={modalType}
          isOpen={showModal}
          closeModalHandler={onCloseModal}
          onSubmitEntry={onSubmitEntry}
        />
      );
    } else if (modalType === 'edit-work') {
      modal = (
        <Modal
          modalType={modalType}
          isOpen={showModal}
          closeModalHandler={onCloseModal}
          onSubmitEntry={onEditEntry}
          entryData={jobs[editIndex]}
        />
      );
    }
    return modal;
  };

  const renderAddButton = () => {
    if (isEditingCv) {
      return (
        <button
          className={sharedStyles['add-btn']}
          onClick={handleAddButtonClick}
        >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
        </button>
      );
    }
  };

  return (
    <section className={styles['work-experience']}>
      {getModal()}
      <div className={sharedStyles['section-header']}>
        <h2>Work Experience</h2>
        {renderAddButton()}
      </div>
      {jobsList}
    </section>
  );
};

export default WorkExperience;
