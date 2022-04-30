import React from 'react';

const WelcomeModalContent = ({ entryData, button }) => {
  return (
    <React.Fragment>
      <p>
        Welcome to the CV builder application. You can switch between the edit
        mode and view mode with the buttons on top.
      </p>
      <p>
        The personal section can be edited by clicking on the element and
        changing it. Clicking outside input or pressing the Enter key saves
        changes. Anything else is edited or added by clicking the icons.
      </p>
    </React.Fragment>
  );
};

export default WelcomeModalContent;
