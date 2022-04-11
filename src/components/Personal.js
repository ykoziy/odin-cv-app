import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faShareNodes,
  faCity,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Personal.module.css';

class Personal extends Component {
  constructor(props) {
    super();
    this.state = {
      fullName: 'John Doe',
      currentRole: 'Current Position',
      location: 'New York, NY',
      phone: '212-777-777',
      email: 'johndoe@domain.com',
      linkedIn: 'linkedIn link',
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.`,
      editField: null,
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleAboutChange = this.handleAboutChange.bind(this);
    this.handleGeneralFieldChange = this.handleGeneralFieldChange.bind(this);
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

  handleGeneralFieldChange(e) {
    const { editField } = this.state;
    let stateName = null;
    if (editField === 'location') {
      stateName = 'location';
    } else if (editField === 'phone') {
      stateName = 'phone';
    } else if (editField === 'email') {
      stateName = 'email';
    } else if (editField === 'linkedin') {
      stateName = 'linkedIn';
    }

    if (stateName) {
      this.setState({
        [stateName]: e.target.value,
      });
    }
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

  handleAboutChange(e) {
    this.setState({
      about: e.target.value,
    });
  }

  renderAboutSection() {
    const { editField, about } = this.state;
    if (editField === 'about') {
      return (
        <textarea
          type="text"
          value={about}
          onChange={this.handleAboutChange}
          onFocus={this.handleInputFocus}
          autoFocus
          rows={4}
          cols={180}
        ></textarea>
      );
    } else {
      return <p onClick={() => this.editFieldHandler('about')}>{about}</p>;
    }
  }

  renderGeneralInput(value) {
    return (
      <input
        type="text"
        value={value}
        onChange={this.handleGeneralFieldChange}
        onFocus={this.handleInputFocus}
        autoFocus
      ></input>
    );
  }

  renderGeneralPar(value, editFieldNme) {
    return <p onClick={() => this.editFieldHandler(editFieldNme)}>{value}</p>;
  }

  renderGeneralField(index) {
    const { editField, location, phone, email, linkedIn } = this.state;
    let element = null;
    let icon = null;
    switch (index) {
      case 0:
        if (editField === 'location') {
          element = this.renderGeneralInput(location);
        } else {
          element = this.renderGeneralPar(location, 'location');
        }
        icon = faCity;
        break;
      case 1:
        if (editField === 'phone') {
          element = this.renderGeneralInput(phone);
        } else {
          element = this.renderGeneralPar(phone, 'phone');
        }
        icon = faPhone;
        break;
      case 2:
        if (editField === 'email') {
          element = this.renderGeneralInput(email);
        } else {
          element = this.renderGeneralPar(email, 'email');
        }
        icon = faEnvelope;
        break;
      case 3:
        if (editField === 'linkedin') {
          element = this.renderGeneralInput(linkedIn);
        } else {
          element = this.renderGeneralPar(linkedIn, 'linkedin');
        }
        icon = faShareNodes;
        break;
      default:
        element = null;
        icon = faSquare;
        break;
    }
    return (
      <React.Fragment>
        <FontAwesomeIcon icon={icon} />
        {element}
      </React.Fragment>
    );
  }

  editFieldHandler(fieldName) {
    this.setState({
      editField: fieldName,
    });
  }

  handleBlankField(fieldName) {
    let stateName = null;
    let stateValue = null;
    if (fieldName === 'full-name') {
      stateName = 'fullName';
      stateValue = 'John Doe';
    } else if (fieldName === 'current-position') {
      stateName = 'currentRole';
      stateValue = 'Current Position';
    } else if (fieldName === 'location') {
      stateName = 'location';
      stateValue = 'New York, NY';
    } else if (fieldName === 'phone') {
      stateName = 'phone';
      stateValue = '212-777-7777';
    } else if (fieldName === 'email') {
      stateName = 'email';
      stateValue = 'johndoe@domain.com';
    } else if (fieldName === 'linkedin') {
      stateName = 'linkedIn';
      stateValue = 'linkedIn link';
    } else if (fieldName === 'about') {
      stateName = 'about';
      stateValue = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.`;
    }
    if (stateName && stateValue) {
      if (this.state[stateName] === '') {
        this.setState({
          [stateName]: stateValue,
        });
      }
    }
  }

  handleClickOutside(e) {
    if (e.target.nodeName !== 'INPUT') {
      this.handleBlankField(this.state.editField);
      this.setState({
        editField: null,
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
          <ul className={styles.list}>
            <li>{this.renderGeneralField(0)}</li>
            <li>{this.renderGeneralField(1)}</li>
            <li>{this.renderGeneralField(2)}</li>
            <li>{this.renderGeneralField(3)}</li>
          </ul>
        </div>
        <div className={styles.about}>{this.renderAboutSection()}</div>
      </section>
    );
  }
}

export default Personal;
