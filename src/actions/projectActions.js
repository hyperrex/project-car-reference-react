import { FETCH_PROJECTS, NEW_PROJECT } from './types';

// const BASE_URL = 'http://localhost:8000';
const BASE_URL = 'https://project-car-reference-api.herokuapp.com';

export const fetchProjects = () => dispatch => {
  const id = localStorage.getItem('user');
  console.log('fetching...', id);
  fetch(`${BASE_URL}/users/projects/${id}`)
    .then(res => res.json())
    .then(projects =>
      dispatch({
        type: FETCH_PROJECTS,
        payload: projects
      })
    );
};

export const fetchProjectById = () => dispatch => {
  const id = localStorage.getItem('user');
  console.log('fetching...', id);
  fetch(`${BASE_URL}/projects/${id}`)
    .then(res => res.json())
    .then(project =>
      dispatch({
        type: FETCH_PROJECTS,
        payload: project
      })
    );
};

export const createProject = project => dispatch => {
  try {
    fetch(`${BASE_URL}/projects`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(res => res.json())
      .then(project =>
        dispatch({
          type: NEW_PROJECT,
          payload: project
        })
      );
  } catch (error) {
    console.log(error);
  }
};
