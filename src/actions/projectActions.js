import { FETCH_PROJECTS, NEW_PROJECT } from './types';

export const fetchProjects = () => dispatch => {
  console.log('fetching...')
    fetch('http://localhost:8000/projects')
    .then(res => res.json())
    .then(projects => dispatch({
      type: FETCH_PROJECTS,
      payload: projects
  }));
}

// export const getProjects = () => {
//   return async (dispatch) => {
//     dispatch({ type: PROJECTS_REQUEST_STARTED })
//     const response = await request(`http://localhost:8000/projects`)
//     const json = await response.json()
//     dispatch({
//       type: PROJECTS_REQUEST_SUCCESS,
//       messages: json._embedded.messages,
//     })
//   }
// }

// async function request(path, method = 'GET', body = null) {
//   if (body) body = JSON.stringify(body)
//   return await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
//     method: method,
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     },
//     body: body
//   })
// }