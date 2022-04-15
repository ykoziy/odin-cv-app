import React, { Component } from 'react';

class WorkExperienceModal extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { onSubmitJobEntry } = this.props;
    return (
      <form onSubmit={onSubmitJobEntry}>
        <label htmlFor="job_title">Job title: </label>
        <input
          type="text"
          name="job_title"
          id="job_title"
          required
          placeholder="enter your job title..."
        ></input>
        <label htmlFor="company_name">Company name: </label>
        <input
          type="text"
          name="company_name"
          id="company_name"
          required
          placeholder="enter company name..."
        ></input>

        <label htmlFor="start_date">Start date: </label>
        <input type="date" name="start_date" id="start_date" required></input>

        <label htmlFor="end_date">End date: </label>
        <input type="date" name="end_date" id="end_date"></input>

        <label htmlFor="job_description">Description: </label>
        <textarea
          rows="10"
          name="job_description"
          id="job_description"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default WorkExperienceModal;
