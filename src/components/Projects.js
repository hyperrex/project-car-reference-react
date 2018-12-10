import React, { Component } from 'react';
import Navbar from './Navbar';
// import UserProject from './UserProject';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8000/projects');
    const json = await response.json();
    // console.log('JSON >>>>>', json);
    this.setState({ projects: json });
  }

  render() {
    console.log('>>>>>>', this.state.projects)
    let UserProjects;
    if (this.state.projects) {
      UserProjects = this.state.projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ));
    }

    return (
      <div>
        <Navbar />
        <div className="Projects">
          <h2>Projects</h2>
          {UserProjects}
        </div>
      </div>
    );
  }
}

export default Projects;
