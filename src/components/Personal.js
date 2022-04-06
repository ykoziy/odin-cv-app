import React, { Component } from 'react';
import styles from '../styles/Personal.module.css';

class Personal extends Component {
  render() {
    return (
      <section className={styles.personal}>
        <div className={styles['left-container']}>
          <h1>John Doe</h1>
          <h2>Current Position</h2>
        </div>
        <div className={styles['right-container']}>
          <p>location</p>
          <p>phone</p>
          <p>email</p>
          <p>linkedIn</p>
        </div>
        <div className={styles.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </section>
    );
  }
}

export default Personal;
