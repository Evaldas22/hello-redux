import {CHANGE_NAME} from './types';


const nameReducer = (state = 'World', action) => {
  switch (action.type){
    case CHANGE_NAME:
      return action.payload;

    default:
      return state;
  }
}

export default nameReducer;