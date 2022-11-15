import { firebaseService } from "../services/firebase-service"

const initialState = {
  user: firebaseService.loggedinUser(),
}

export function userReducer(state = initialState, action) {
  var newState = state
  switch (action.type) {
    case "SET_USER":
      return newState = { ...state, user: action.user }
      break

    case "LOGOUT":
      return newState = { ...state, user: null }
      break

    default:
      return newState
  }
}
