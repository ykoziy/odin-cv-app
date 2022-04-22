import React, { Component } from 'react';
import Personal from './components/Personal';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Modal from './components/Modal/Modal';
import styles from './styles/App.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditingCv: true, showModal: true };
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickView = this.onClickView.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onClickEdit() {
    this.setState({ isEditingCv: true });
  }

  onClickView() {
    this.setState({ isEditingCv: false });
  }

  onCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const isEditingCv = this.state.isEditingCv;
    return (
      <React.Fragment>
        <Modal
          modalType="welcome"
          isOpen={this.state.showModal}
          closeModalHandler={this.onCloseModal}
        />
        <header>
          <h1>CV Builder Application</h1>
          <div className={styles.buttons}>
            <button
              onClick={this.onClickEdit}
              disabled={isEditingCv ? true : false}
            >
              Edit mode
            </button>
            <button
              onClick={this.onClickView}
              disabled={isEditingCv ? false : true}
            >
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
  }
}

export default App;
