import { UPDATE_COUNT, RESET_COUNT } from '../actionTypes'

export const updateCount = value => {
  return {
    type: UPDATE_COUNT,
    value
  }
}

export const resetCount = () => {
  return {
    type: {
      RESET_COUNT,
    }
  }
}