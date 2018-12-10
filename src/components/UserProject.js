import React, { Component } from 'react';
import Navbar from './Navbar';
class UserProject extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <li className="Project">
          <strong>{this.props.project.title}</strong>:{' '}
          {this.props.project.category}
        </li>
      </div>
    );
  }
}

export default UserProject;
