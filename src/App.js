import React, { Component } from 'react';
import Personal from './components/Personal';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';

class App extends Component {
  render() {
    return (
      <main>
        <Personal />
        <WorkExperience />
        <Education />
      </main>
    );
  }
}

export default App;
