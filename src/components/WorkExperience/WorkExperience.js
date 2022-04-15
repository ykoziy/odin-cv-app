import React, { Component } from 'react';
import styles from '../../styles/WorkExperience.module.css';
import ExperienceEntry from './ExperienceEntry';

class WorkExperience extends Component {
  constructor(props) {
    super();
    this.handleAddButtonClick = this.handleAddButtonClick.bind();
  }

  handleAddButtonClick() {
    console.log('add button is clicked');
  }

  render() {
    return (
      <section className={styles['work-experience']}>
        <h2>Work Experience</h2>
        <button onClick={this.handleAddButtonClick}>Add experience</button>
        <ExperienceEntry
          jobTitle="Job Title 1"
          companyName="Company Name 1"
          description="Porttitor massa id neque aliquam. Ac felis donec et odio
            pellentesque diam volutpat. Blandit massa enim nec dui nunc mattis
            enim ut tellus. Nisl suscipit adipiscing bibendum est ultricies. Sed
            nisi lacus sed viverra tellus in hac.Enim tortor at auctor urna nunc
            id cursus. In vitae turpis massa sed elementum tempus egestas. Vitae
            tempus quam pellentesque nec nam aliquam."
          dates="start date - Present"
        />
        <ExperienceEntry
          jobTitle="Job Title 2"
          companyName="Company Name 2"
          description="Porttitor massa id neque aliquam. Ac felis donec et odio
            pellentesque diam volutpat. Blandit massa enim nec dui nunc mattis
            enim ut tellus. Nisl suscipit adipiscing bibendum est ultricies. Sed
            nisi lacus sed viverra tellus in hac.Enim tortor at auctor urna nunc
            id cursus. In vitae turpis massa sed elementum tempus egestas. Vitae
            tempus quam pellentesque nec nam aliquam."
          dates="start date - end date"
        />
      </section>
    );
  }
}

export default WorkExperience;
