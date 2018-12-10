import { FETCH_PROJECTS, NEW_PROJECT } from '../actions/types';

const initialState = {
  projects: [],
  project: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_PROJECTS:
    console.log('reducer...')
    return {
      ...state,
      projects: action.payload
    }
    default: return state
  }
}