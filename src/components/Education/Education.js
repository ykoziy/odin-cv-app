import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Education.module.css';
import sharedStyles from '../../styles/SharedStyles.module.css';
import EducationEntry from './EducationEntry';
import Modal from '../Modal/Modal';
import uniqid from 'uniqid';
import { convertInputDates } from '../../util/util.js';

const Education = ({ isEditingCv }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add-education');
  const [editIndex, setEditIndex] = useState(undefined);
  const [education, setEducation] = useState([
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
  ]);

  const handleAddButtonClick = () => {
    setShowModal(true);
    setModalType('add-education');
  };

  const handleEditButtonClick = (e) => {
    const index = Number(
      e.target.parentElement.parentElement.getAttribute('index'),
    );
    setShowModal(true);
    setModalType('edit-education');
    setEditIndex(index);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onSubmitEntry = (e) => {
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
    setShowModal(false);
    setEducation((education) => [newEntry, ...education]);
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

    const newList = education.map((education, index) => {
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
    setShowModal(false);
    setEducation(newList);
  };

  const onDeleteEntry = (e) => {
    const deletionIndex = Number(
      e.target.parentElement.parentElement.getAttribute('index'),
    );
    const newList = education.filter((_, idx) => deletionIndex !== idx);
    setEducation(newList);
  };

  const renderEntry = (education, index) => {
    return (
      <EducationEntry
        key={education.key}
        index={index}
        title={education.title}
        schoolName={education.schoolName}
        dates={`${education.startDate} - ${education.endDate}`}
        onDeleteEntry={onDeleteEntry}
        onEditEntry={handleEditButtonClick}
        isEditingCv={isEditingCv}
      />
    );
  };

  const getModal = () => {
    let modal;
    if (modalType === 'add-education') {
      modal = (
        <Modal
          modalType={modalType}
          isOpen={showModal}
          closeModalHandler={onCloseModal}
          onSubmitEntry={onSubmitEntry}
        />
      );
    } else if (modalType === 'edit-education') {
      modal = (
        <Modal
          modalType={modalType}
          isOpen={showModal}
          closeModalHandler={onCloseModal}
          onSubmitEntry={onEditEntry}
          entryData={education[editIndex]}
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
    <section className={styles.education}>
      {getModal()}
      <div className={sharedStyles['section-header']}>
        <h2>Education</h2>
        {renderAddButton()}
      </div>
      {education.map((education, index) => renderEntry(education, index))}
    </section>
  );
};

export default Education;
