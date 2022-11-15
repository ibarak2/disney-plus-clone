import { firebaseService } from "../services/firebase-service.js"


export function checkStore() {
  return async (dispatch) => {
    try {
      const check = 'check'
      dispatch({ type: "CHECK", check })
    } catch (err) {
      console.log(err);
    }
  }
}

export function loginWithGoogle() {
  return async dispatch => {
    try {
      const user = await firebaseService.onLoginWithGoogle()
      dispatch({ type: "SET_USER", user })
      return true
    } catch (err) {
      console.log(err);
    }
  }
}

export function logout() {
  return dispatch => {
    firebaseService.onLogout()
    dispatch({ type: "LOGOUT" })
  }
}