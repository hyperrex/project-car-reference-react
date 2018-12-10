import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class AddUserProject extends Component {
  state = {
    project_title: '',
    project_description: ''
  };

  addProj = e => {
    e.preventDefault();

    let { project_title, project_description } = this.state;

    let newProject = {
      project_title,
      project_description
    };

    this.props.addProj(newProject, this.props.history);
  };

  render() {
    return (
      <div>
        <Navbar />
        <div
          className="container border border-primary rounded my-5 w-50"
          id="create-project-container"
        >
          <form id="create-project-form" className="form text-center">
            <h4 className="m-1 text-center">Create Project</h4>

            <div className="form-group text-center">
              <label htmlFor="project-title" className="control-label" />
              <input
                required
                type="text"
                className="form-control text-center"
                id="project-title"
                placeholder="Title"
                onChange={e => this.setState({ project_title: e.target.value })}
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
                onChange={e =>
                  this.setState({ project_description: e.target.value })
                }
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

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    AddUserProject: bindActionCreators(AddUserProject, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserProject);
