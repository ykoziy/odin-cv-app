import React from 'react';
import EducationModalContent from './EducationModalContent';
import WorkModalContent from './WorkModalContent';
import WelcomeModalContent from './WelcomeModalContent';

const ModalContent = ({ onSubmitEntry, isEditing, entryData, modalType }) => {
  let button;

  if (!isEditing) {
    button = <button type="submit">Submit</button>;
  } else {
    button = <button type="submit">Save</button>;
  }

  const renderContent = () => {
    if (modalType === 'education') {
      return <EducationModalContent entryData={entryData} button={button} />;
    } else if (modalType === 'work') {
      return <WorkModalContent entryData={entryData} button={button} />;
    } else if (modalType === 'welcome') {
      return <WelcomeModalContent />;
    }
  };

  return <form onSubmit={onSubmitEntry}>{renderContent()}</form>;
};

export default ModalContent;
