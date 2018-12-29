import {createStore} from 'redux';
import {nameReducer} from '../reducers/nameReducer';

// initial state
const initialState = {
    name: 'World!'
}

// store
export const store = createStore(nameReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  