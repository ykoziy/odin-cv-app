import React, { Component } from 'react';
import Personal from './components/Personal';
import WorkExperience from './components/WorkExperience/WorkExperience';

class App extends Component {
  render() {
    return (
      <main>
        <Personal />
        <WorkExperience />
      </main>
    );
  }
}

export default App;
