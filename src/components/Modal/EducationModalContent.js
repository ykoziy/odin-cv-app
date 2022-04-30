import React from 'react';
import styles from '../../styles/Modal.module.css';
import { setInputDate } from '../../util/util.js';

const EducationModalContent = ({ entryData, button }) => {
  return (
    <React.Fragment>
      <div className={styles['modal-form-row']}>
        <label htmlFor="education_title">Education title: </label>
        <input
          type="text"
          name="education_title"
          id="education_title"
          required
          placeholder="enter your education title..."
          defaultValue={entryData ? entryData.title : ''}
        ></input>
      </div>

      <div className={styles['modal-form-row']}>
        <label htmlFor="school_name">School name: </label>
        <input
          type="text"
          name="school_name"
          id="school_name"
          required
          placeholder="enter school name..."
          defaultValue={entryData ? entryData.schoolName : ''}
        ></input>
      </div>

      <div className={styles['modal-form-row']}>
        <label htmlFor="start_date">Start date: </label>
        <input
          type="date"
          name="start_date"
          id="start_date"
          required
          defaultValue={entryData ? setInputDate(entryData.startDate) : ''}
        ></input>
      </div>

      <div className={styles['modal-form-row']}>
        <label htmlFor="end_date">End date: </label>
        <input
          type="date"
          name="end_date"
          id="end_date"
          defaultValue={entryData ? setInputDate(entryData.endDate) : ''}
        ></input>
      </div>
      <div className={styles['modal-btn-container']}>{button}</div>
    </React.Fragment>
  );
};

export default EducationModalContent;
