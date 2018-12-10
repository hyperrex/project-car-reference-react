import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/projectActions'
import Navbar from './Navbar';
// import UserProject from './UserProject';

class Projects extends Component {

  async componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    let UserProjects;
    if (this.props.projects) {
      UserProjects = this.props.projects.map(project => (
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

Projects.propTypes = {
  fetchProjects: PropTypes.func,
  projects: PropTypes.array.isRequired
}

const mapStatetoProps = state => ({
  projects: state.projects.projects
});

export default connect(mapStatetoProps, { fetchPosts })(Projects);
