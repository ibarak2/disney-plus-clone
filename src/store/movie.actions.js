import { firebaseService } from "../services/firebase-service";


export function getMovies() {
    return async dispatch => {
        try {
            const movies = await firebaseService.getData()
            dispatch({ type: "SET_MOVIES", movies })
        } catch (err) {
            console.log(err);
        }
    }
}

export function getMovie(movieId) {
    return async dispatch => {
        try {
            dispatch({ type: "SET_MOVIE", movieId })
        } catch (err) {
            console.log(err);
        }
    }
}