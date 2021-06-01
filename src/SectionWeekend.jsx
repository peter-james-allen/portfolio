import React from 'react';
import styles from './Section.module.css';
import SectionHeader from './SectionHeader';

class SectionWeekend extends React.Component {
    render() {
        return (
          <div className={styles.section} id='MAKE IT A WEEKEND'>
          <SectionHeader upper='SUNDAY' lower='plans'/>
          </div>
        )
    }
}

export default SectionWeekend;


