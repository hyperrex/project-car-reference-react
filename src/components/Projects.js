import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/projectActions'
import EditProject from './EditProject';

// const BASE_URL = 'http://localhost:8000';
const BASE_URL = 'https://project-car-reference-api.herokuapp.com';

class Projects extends Component {
  state={
    display: 'none'
  }

  componentWillMount() {
    this.props.fetchProjects();
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.newProject) {
      this.props.projects.unshift(nextProps.newProject)
    }
  }

  goToProject = async id => {
    let response = await fetch(`${BASE_URL}/projects/${id}`)
    let project = await response.json()
    this.props.history.push('/userproject', project);
  }

  editProject = async id => {
    this.setState({display: 'unset'})
  }

  deleteProject = async id => {
    let response = await fetch(`${BASE_URL}/projects/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
     })
    let event = await response.json()
    console.log(event)
  }

  render() {
    let UserProjects;
    if (this.props.projects) {
      UserProjects = this.props.projects.map(project => (
        <div key={project.id} className="container border border-primary rounded my-5 w-80 bg-white">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button onClick={() => this.goToProject(project.projects_id)}>Got to Project</button>
          <button onClick={() => this.editProject(project.projects_id)}>Edit Project</button>
          <button onClick={() => this.deleteProject(project.projects_id)}>Delete Project</button>
          <div style={{display: this.state.display}}>
          <EditProject id={project.projects_id} />
          </div>
          
        </div>
      ));
    }

    return (
      <div>
        <div className="container border border-primary rounded my-5 ml-4 mr-4 mx-auto bg-light" id="projects">
          <h2 className="text-center">My Project List</h2>
          {UserProjects}
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  fetchProjects: PropTypes.func,
  projects: PropTypes.array.isRequired,
  newProject: PropTypes.object
}

const mapStateToProps = state => ({
  projects: state.projects.jobs,
  newProject: state.projects.item
});

export default connect(mapStateToProps, { fetchProjects })(Projects);

/*

const getUserProjects = () => {
  const id = localStorage.getItem('user');
  axios
    .get(`https://project-car-reference-api.herokuapp.com/users/projects/${id}`)
    // .get(`http://localhost:8000/users/projects/${id}`)
    .then(result => {
      renderUserProjects(result.data);
    })
    .catch(err => {
      return 'ERROR';
    });
};
const UserProjects = data => {
  const list = document.querySelector('#my-projects-list');
  localStorage.removeItem('project');
  list.innerHTML = '';

  data.forEach(project => {
    const button = document.createElement('button');
    button.setAttribute('id', `${project.id}`);
    button.setAttribute('class', 'btn btn-primary btn-block mb-3');
    button.innerHTML = `${project.title}`;
    button.addEventListener('click', viewProject);
    button.addEventListener('click', renderUserProject);
    list.appendChild(button);
  });
};
*/