import React from 'react';
import styles from './Nav.module.css';

class Nav extends React.Component {
    render() {
        return (
          <div>
            <nav className={styles.navBar}>
              <NavButton text='G & P WEDDING' link='false' />
              <NavButton text='HOME' />
              <NavButton text='DETAILS' />
              <NavButton text='GETTING THERE' />
              <NavButton text='MAKE IT A WEEKEND' />
              <NavButton text='GIFTS' />
              <NavButton text='RSVP' />
            </nav>
          </div>
        )
    }
}

class NavButton extends React.Component {
  render() {
    if (this.props.link === 'false') {
    return (
      <h1 className={styles.navButton}>{ this.props.text }</h1>
    )}
    else {
      return (
        <a href={`#${this.props.text}`}> <h1 className={styles.navButton+ ' ' + styles.navButtonHover}>{ this.props.text }</h1></a>
    )}
  }
}

export default Nav;


