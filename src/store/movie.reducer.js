
const initialState = {
    movies: [],
    movie: null
}

export function movieReducer(state = initialState, action) {
    var newState = state
    var currMovie
    switch (action.type) {
        case "SET_MOVIES":
            return newState = { ...state, movies: action.movies }
            break

        case "SET_MOVIE":
            currMovie = newState.movies.find((movie) => movie.id === action.movieId)
            return newState = { ...state, movie: currMovie }

        default:
            return newState
    }
}