import {createStore} from 'redux';
import name from '../duck/reducers';

/*
// initial state
const initialState = {
    name: 'World!'
}
*/

// store
export const store = createStore(name, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  