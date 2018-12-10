import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProject } from '../actions/projectActions';
import Navbar from './Navbar';

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newProject = {
      title: this.state.title,
      description: this.state.description
    };
    this.props.createProject(newProject);
    // this.props.history.push('/projects')
  }

  render() {
    return (
      <div>
        <Navbar />
        <div
          className="container border border-primary rounded my-5 w-50"
          id="create-project-container"
        >
          <form id="create-project-form" className="form text-center" onSubmit={this.handleSubmit}>
            <h4 className="m-1 text-center">Create Project</h4>

            <div className="form-group text-center">
              <label htmlFor="project-title" className="control-label" />
              <input
                required
                type="text"
                className="form-control text-center"
                id="project-title"
                placeholder="Title"
                onChange={e => this.setState({ title: e.target.value })}
              />
            </div>

            <div className="form-group text-center">
              <label htmlFor="project-description" className="control-label" />
              <input
                required
                type="text"
                className="form-control text-center"
                id="project-description"
                placeholder="Description"
                onChange={e => this.setState({ description: e.target.value })}
              />
            </div>

            <div className="form-group text-center ">
              <button
                id="submit-project-button"
                className="btn btn-lg btn-primary"
              >
                <i className="fas fa-plus" /> Create Project
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProject }
)(CreateProject);
