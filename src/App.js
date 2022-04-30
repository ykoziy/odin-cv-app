import React, { useState } from 'react';
import Personal from './components/Personal';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Modal from './components/Modal/Modal';
import styles from './styles/App.module.css';

const App = () => {
  const [isEditingCv, setIsEditingCv] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const onClickEdit = () => {
    setIsEditingCv(true);
  };

  const onClickView = () => {
    setIsEditingCv(false);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <Modal
        modalType="welcome"
        isOpen={showModal}
        closeModalHandler={onCloseModal}
      />
      <header>
        <h1>CV Builder Application</h1>
        <div className={styles.buttons}>
          <button onClick={onClickEdit} disabled={isEditingCv ? true : false}>
            Edit mode
          </button>
          <button onClick={onClickView} disabled={isEditingCv ? false : true}>
            View mode
          </button>
          <div className={styles['button-divider']}></div>
        </div>
      </header>
      <main className={styles['app-container']}>
        <Personal isEditingCv={isEditingCv} />
        <WorkExperience isEditingCv={isEditingCv} />
        <Education isEditingCv={isEditingCv} />
      </main>
    </React.Fragment>
  );
};

export default App;
