import React from 'react';
import styles from './SectionHeader.module.css';

class SectionHeader extends React.Component {
    render() {
        return (
          <div className={styles.container} id={this.props.id}>
            <div className={styles.upper}>{this.props.upper}</div>
            <div className={styles.lower}>{this.props.lower}</div>
          </div>
        )
    }
}

export default SectionHeader;


