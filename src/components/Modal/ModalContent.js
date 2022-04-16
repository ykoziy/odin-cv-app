import React, { Component } from 'react';
import { setInputDate } from '../../util/util.js';

class ModalContent extends Component {
  constructor(props) {
    super();
  }

  renderEducationModal(entryData, button) {
    return (
      <React.Fragment>
        <label htmlFor="education_title">Education title: </label>
        <input
          type="text"
          name="education_title"
          id="education_title"
          required
          placeholder="enter your education title..."
          defaultValue={entryData ? entryData.title : ''}
        ></input>
        <label htmlFor="school_name">School name: </label>
        <input
          type="text"
          name="school_name"
          id="school_name"
          required
          placeholder="enter school name..."
          defaultValue={entryData ? entryData.schoolName : ''}
        ></input>

        <label htmlFor="start_date">Start date: </label>
        <input
          type="date"
          name="start_date"
          id="start_date"
          required
          defaultValue={entryData ? setInputDate(entryData.startDate) : ''}
        ></input>

        <label htmlFor="end_date">End date: </label>
        <input
          type="date"
          name="end_date"
          id="end_date"
          defaultValue={entryData ? setInputDate(entryData.endDate) : ''}
        ></input>
        {button}
      </React.Fragment>
    );
  }

  renderWorkModal(entryData, button) {
    return (
      <React.Fragment>
        <label htmlFor="job_title">Job title: </label>
        <input
          type="text"
          name="job_title"
          id="job_title"
          required
          placeholder="enter your job title..."
          defaultValue={entryData ? entryData.title : ''}
        ></input>
        <label htmlFor="company_name">Company name: </label>
        <input
          type="text"
          name="company_name"
          id="company_name"
          required
          placeholder="enter company name..."
          defaultValue={entryData ? entryData.company : ''}
        ></input>

        <label htmlFor="start_date">Start date: </label>
        <input
          type="date"
          name="start_date"
          id="start_date"
          required
          defaultValue={entryData ? setInputDate(entryData.startDate) : ''}
        ></input>

        <label htmlFor="end_date">End date: </label>
        <input
          type="date"
          name="end_date"
          id="end_date"
          defaultValue={entryData ? setInputDate(entryData.endDate) : ''}
        ></input>

        <label htmlFor="job_description">Description: </label>
        <textarea
          rows="10"
          name="job_description"
          id="job_description"
          required
          defaultValue={entryData ? entryData.description : ''}
        ></textarea>
        {button}
      </React.Fragment>
    );
  }

  render() {
    const { onSubmitEntry, isEditing, entryData, modalType } = this.props;
    let button;
    let modalContent;
    if (!isEditing) {
      button = <button type="submit">Submit</button>;
    } else {
      button = <button type="submit">Save</button>;
    }

    if (modalType === 'education') {
      modalContent = this.renderEducationModal(entryData, button);
    } else if (modalType === 'work') {
      modalContent = this.renderWorkModal(entryData, button);
    }

    return <form onSubmit={onSubmitEntry}>{modalContent}</form>;
  }
}

export default ModalContent;
