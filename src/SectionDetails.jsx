import React from 'react';
import styles from './Section.module.css';
import SectionHeader from './SectionHeader';

class SectionDetails extends React.Component {
    render() {
        return (
          <div className={styles.section} id='DETAILS'>
          <SectionHeader upper='WEDDING' lower='Details'/>
          </div>
        )
    }
}

export default SectionDetails;


