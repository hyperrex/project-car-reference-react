export const PROJECTS_REQUEST_STARTED = 'PROJECT_REQUEST_STARTED'
export const PROJECTS_REQUEST_SUCCESS = 'PROJECT_REQUEST_SUCCESS'

export const getProjects = () => {
  return async (dispatch) => {
    dispatch({ type: PROJECTS_REQUEST_STARTED })
    const response = await request(`/api/messages`)
    const json = await response.json()
    dispatch({
      type: PROJECTS_REQUEST_SUCCESS,
      messages: json._embedded.messages,
    })
  }
}

async function request(path, method = 'GET', body = null) {
  if (body) body = JSON.stringify(body)
  return await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: body
  })
}