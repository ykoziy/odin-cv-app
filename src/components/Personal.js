import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faShareNodes,
  faCity,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Personal.module.css';

const Personal = ({ isEditingCv }) => {
  const [fullName, setFullName] = useState('John Doe');
  const [currentRole, setCurrentRole] = useState('Current Position');
  const [location, setLocation] = useState('New York, NY');
  const [phone, setPhone] = useState('212-777-777');
  const [email, setEmail] = useState('johndoe@domain.com');
  const [linkedIn, setLinkedIn] = useState('linkedIn link');
  const [about, setAbout] =
    useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur.`);
  const [editField, setEditField] = useState(null);

  useEffect(() => {
    if (editField) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const handleInputFocus = (e) => {
    e.target.select();
  };

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleRoleChange = (e) => {
    setCurrentRole(e.target.value);
  };

  const handleGeneralFieldChange = (e) => {
    let targetValue = e.target.value;
    if (editField === 'location') {
      setLocation(targetValue);
    } else if (editField === 'phone') {
      setPhone(targetValue);
    } else if (editField === 'email') {
      setEmail(targetValue);
    } else if (editField === 'linkedin') {
      setLinkedIn(targetValue);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleBlankField(editField);
      setEditField(null);
    }
  };

  const renderFullNameField = () => {
    if (editField === 'full-name') {
      return (
        <input
          type="text"
          value={fullName}
          onChange={handleNameChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          autoFocus
        ></input>
      );
    } else {
      return <h1 onClick={() => editFieldHandler('full-name')}>{fullName}</h1>;
    }
  };

  const renderCurrentRole = () => {
    if (editField === 'current-position') {
      return (
        <input
          type="text"
          value={currentRole}
          onChange={handleRoleChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          autoFocus
        ></input>
      );
    } else {
      return (
        <h2 onClick={() => editFieldHandler('current-position')}>
          {currentRole}
        </h2>
      );
    }
  };

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };

  const renderAboutSection = () => {
    if (editField === 'about') {
      return (
        <textarea
          type="text"
          value={about}
          onChange={handleAboutChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          autoFocus
          rows={4}
          cols={180}
        ></textarea>
      );
    } else {
      return <p onClick={() => editFieldHandler('about')}>{about}</p>;
    }
  };

  const renderGeneralInput = (value) => {
    return (
      <input
        type="text"
        value={value}
        onChange={handleGeneralFieldChange}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
        autoFocus
      ></input>
    );
  };

  const renderGeneralPar = (value, editFieldNme) => {
    return <p onClick={() => editFieldHandler(editFieldNme)}>{value}</p>;
  };

  const renderGeneralField = (index) => {
    let element = null;
    let icon = null;
    switch (index) {
      case 0:
        if (editField === 'location') {
          element = renderGeneralInput(location);
        } else {
          element = renderGeneralPar(location, 'location');
        }
        icon = faCity;
        break;
      case 1:
        if (editField === 'phone') {
          element = renderGeneralInput(phone);
        } else {
          element = renderGeneralPar(phone, 'phone');
        }
        icon = faPhone;
        break;
      case 2:
        if (editField === 'email') {
          element = renderGeneralInput(email);
        } else {
          element = renderGeneralPar(email, 'email');
        }
        icon = faEnvelope;
        break;
      case 3:
        if (editField === 'linkedin') {
          element = renderGeneralInput(linkedIn);
        } else {
          element = renderGeneralPar(linkedIn, 'linkedin');
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
  };

  const editFieldHandler = (fieldName) => {
    if (isEditingCv) {
      setEditField(fieldName);
    }
  };

  const handleBlankField = (fieldName) => {
    if (fieldName === 'full-name') {
      if (fullName === '') {
        setFullName('John Doe');
      }
    } else if (fieldName === 'current-position') {
      if (currentRole === '') {
        setCurrentRole('Current Position');
      }
    } else if (fieldName === 'location') {
      if (location === '') {
        setLocation('New York, NY');
      }
    } else if (fieldName === 'phone') {
      if (phone === '') {
        setPhone('212-777-7777');
      }
    } else if (fieldName === 'email') {
      if (email === '') {
        setEmail('johndoe@domain.com');
      }
    } else if (fieldName === 'linkedin') {
      if (linkedIn === '') {
        setLinkedIn('linkedIn link');
      }
    } else if (fieldName === 'about') {
      let about = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.`;
      if (about) {
        setAbout(about);
      }
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.nodeName !== 'INPUT' && e.target.nodeName !== 'TEXTAREA') {
      handleBlankField(editField);
      setEditField(null);
    }
  };

  return (
    <section className={styles.personal}>
      <div className={styles['left-container']}>
        {renderFullNameField()}
        {renderCurrentRole()}
      </div>
      <div className={styles['right-container']}>
        <ul className={styles.list}>
          <li>{renderGeneralField(0)}</li>
          <li>{renderGeneralField(1)}</li>
          <li>{renderGeneralField(2)}</li>
          <li>{renderGeneralField(3)}</li>
        </ul>
      </div>
      <div className={styles.about}>{renderAboutSection()}</div>
    </section>
  );
};

export default Personal;
