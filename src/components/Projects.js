import React, { Component } from 'react';
import Navbar from './Navbar';
import UserProject from './UserProject';

class Projects extends Component {
  render() {
    // console.log(this.props)
    let UserProjects;
    if (this.props.projects) {
      UserProjects = this.props.projects.map(project => {
        return <UserProject key={project.title} project={project} />;
      });
    }
    return (
      <div>
        <Navbar />
        <div className="Projects">
          <h3>Latest Projects</h3>
          {UserProjects}
        </div>
      </div>
    );
  }
}

export default Projects;
