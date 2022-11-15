import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'

import { userReducer } from './user.reducer.js'
import { movieReducer } from './movie.reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    userModule: userReducer,
    movieModule: movieReducer,
})


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
window.gStore = store