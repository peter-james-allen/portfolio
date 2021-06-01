import React from 'react';
import styles from './Section.module.css';
import SectionHeader from './SectionHeader';

class SectionTransport extends React.Component {
    render() {
        return (
          <div className={styles.section} id='GETTING THERE'>
          <SectionHeader upper='GETTING' lower='there'/>
          </div>
        )
    }
}

export default SectionTransport;


