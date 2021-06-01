import React from 'react';
import styles from './Section.module.css';
import SectionHeader from './SectionHeader';

class SectionRSVP extends React.Component {
    render() {
        return (
          <div className={styles.section} id='RSVP'>
          <SectionHeader upper='R.S.V.P.' lower='please'/>
          </div>
        )
    }
}

export default SectionRSVP;


