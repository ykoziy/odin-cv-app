import React, { Component } from 'react';
import { setInputDate } from '../../util/util.js';

class EducationModal extends Component {
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
      </form>
    );
  }
}

export default EducationModal;
