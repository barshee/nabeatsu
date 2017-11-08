import { UPDATE_COUNT, RESET_COUNT } from '../actionTypes';

const initialState = {
  count: 0,
}

export default function count(state = initialState, action) {
  switch (action.type) {
    case UPDATE_COUNT:
      const newValue = state.count + action.value;
      return Object.assign({}, state, {
        count: newValue >= 0 ? newValue : 0
      });
    case RESET_COUNT:
      return Object.assign({}, state, {
        count: 0
      });
    default:
      return state
  }
}