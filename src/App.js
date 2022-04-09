import React, { Component } from 'react';
import Personal from './components/Personal';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import styles from './styles/App.module.css';

class App extends Component {
  render() {
    return (
      <main className={styles['app-container']}>
        <Personal />
        <WorkExperience />
        <Education />
      </main>
    );
  }
}

export default App;
