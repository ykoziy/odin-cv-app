import React, { Component } from 'react';
import styles from '../styles/Personal.module.css';

class Personal extends Component {
  constructor(props) {
    super();
    this.state = {
      fullName: 'John Doe',
      currentRole: 'Current Position',
      editField: null,
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.editFieldHandler = this.editFieldHandler.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleInputFocus(e) {
    e.target.select();
  }

  handleNameChange(e) {
    this.setState({
      fullName: e.target.value,
    });
  }

  handleRoleChange(e) {
    this.setState({
      currentRole: e.target.value,
    });
  }

  editFieldHandler(fieldName) {
    this.setState({
      editField: fieldName,
    });
  }

  renderFullNameField() {
    const { editField, fullName } = this.state;
    if (editField === 'full-name') {
      return (
        <input
          type="text"
          value={fullName}
          onChange={this.handleNameChange}
          onFocus={this.handleInputFocus}
          autoFocus
        ></input>
      );
    } else {
      return (
        <h1 onClick={() => this.editFieldHandler('full-name')}>{fullName}</h1>
      );
    }
  }

  renderCurrentRole() {
    const { editField, currentRole } = this.state;
    if (editField === 'current-position') {
      return (
        <input
          type="text"
          value={currentRole}
          onChange={this.handleRoleChange}
          onFocus={this.handleInputFocus}
          autoFocus
        ></input>
      );
    } else {
      return (
        <h2 onClick={() => this.editFieldHandler('current-position')}>
          {currentRole}
        </h2>
      );
    }
  }

  handleClickOutside(e) {
    if (e.target.nodeName !== 'INPUT') {
      this.setState({
        editField: 0,
      });
    }
  }

  render() {
    const { editField } = this.state;
    if (editField) {
      document.addEventListener('mousedown', this.handleClickOutside);
    } else {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
    return (
      <section className={styles.personal}>
        <div className={styles['left-container']}>
          {this.renderFullNameField()}
          {this.renderCurrentRole()}
        </div>
        <div className={styles['right-container']}>
          <p>location</p>
          <p>phone</p>
          <p>email</p>
          <p>linkedIn</p>
        </div>
        <div className={styles.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </section>
    );
  }
}

export default Personal;
