export const UPDATE_COUNTER = 'UPDATE_COUNTER'

export default (value) => {
  return {
    type: UPDATE_COUNTER,
    payload: value
  }
}
