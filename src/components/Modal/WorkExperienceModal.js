import React, { Component } from 'react';
import { setInputDate } from '../../util/util.js';

class WorkExperienceModal extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { onSubmitEntry, isEditing, entryData } = this.props;
    let button;
    if (!isEditing) {
      button = <button type="submit">Submit</button>;
    } else {
      button = <button type="submit">Save</button>;
    }
    return (
      <form onSubmit={onSubmitEntry}>
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
      </form>
    );
  }
}

export default WorkExperienceModal;
