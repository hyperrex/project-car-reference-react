import { FETCH_PROJECTS, NEW_PROJECT } from '../actions/types';

const initialState = {
  jobs: [],
  job: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_PROJECTS:
    return {
      ...state,
      jobs: action.payload
    }
    case NEW_PROJECT:
    return {
      ...state,
      job: action.payload
    }
    default:
      return state
  }
}