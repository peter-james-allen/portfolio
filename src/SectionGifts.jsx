import React from 'react';
import styles from './Section.module.css';
import SectionHeader from './SectionHeader';

class SectionGifts extends React.Component {
    render() {
        return (
          <div className={styles.section} id='GIFTS'>
          <SectionHeader upper='PRESENTS' lower='you'/>
          </div>
        )
    }
}

export default SectionGifts;


