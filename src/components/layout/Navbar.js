import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
  };

  static propTipes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <i className={this.props.icon} /> {this.props.title}
      </nav>
    );
  }
}

export default Navbar;
