import React from 'react';
import styles from '../../styles/Modal.module.css';
import { setInputDate } from '../../util/util.js';

const WorkModalContent = ({ entryData, button }) => {
  return (
    <React.Fragment>
      <div className={styles['modal-form-row']}>
        <label htmlFor="job_title">Job title: </label>
        <input
          type="text"
          name="job_title"
          id="job_title"
          required
          placeholder="enter your job title..."
          defaultValue={entryData ? entryData.title : ''}
        ></input>
      </div>

      <div className={styles['modal-form-row']}>
        <label htmlFor="company_name">Company name: </label>
        <input
          type="text"
          name="company_name"
          id="company_name"
          required
          placeholder="enter company name..."
          defaultValue={entryData ? entryData.company : ''}
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

      <label htmlFor="job_description">Description: </label>
      <textarea
        rows="10"
        name="job_description"
        id="job_description"
        required
        defaultValue={entryData ? entryData.description : ''}
      ></textarea>
      <div className={styles['modal-btn-container']}>{button}</div>
    </React.Fragment>
  );
};

export default WorkModalContent;
