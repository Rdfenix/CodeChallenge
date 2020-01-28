import {
  GET_PRODUCTS
} from '../../actions/actionTypes'

const INITIAL_STATE = []

const product = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload
    default:
      return state
  }
}

export {
  product
}