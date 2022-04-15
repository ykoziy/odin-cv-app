import React, { Component } from 'react';
import styles from '../../styles/WorkExperience.module.css';
import ExperienceEntry from './ExperienceEntry';
import Modal from '../Modal/Modal';

class WorkExperience extends Component {
  constructor(props) {
    super();
    this.state = { showModal: false };
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  handleAddButtonClick() {
    this.setState({ showModal: true });
  }

  onCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <section className={styles['work-experience']}>
        <Modal
          modalType="add-work"
          isOpen={this.state.showModal}
          closeModalHandler={this.onCloseModal}
        />
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
