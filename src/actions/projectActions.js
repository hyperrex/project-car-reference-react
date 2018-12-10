import { FETCH_PROJECTS, NEW_PROJECT } from './types';

const BASE_URL = 'http://localhost:8000';
// const BASE_URL = 'https://project-car-reference-api.herokuapp.com';

export const fetchProjects = () => dispatch => {
  console.log('fetching...');
  fetch(`${BASE_URL}/projects`)
    .then(res => res.json())
    .then(projects =>
      dispatch({
        type: FETCH_PROJECTS,
        payload: projects
      })
    );
};

export const createProject = project => dispatch => {
  console.log('Action called!!!')
  fetch(`${BASE_URL}/`, {
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
};