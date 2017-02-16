import { UPDATE_COUNTER } from '../actions/update-counter'

export default(state = 0, { type, payload } = {}) => {
  switch(type) {
    case UPDATE_COUNTER :
      return 0 + payload

    default :
      return state
  }
}
