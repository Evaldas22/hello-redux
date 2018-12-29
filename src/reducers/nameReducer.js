import {CHANGE_NAME} from '../constants';


export const nameReducer = (state = 'World', action) => {
    switch (action.type){
      case CHANGE_NAME:
        return {
          ...state,
          name: action.payload.name
        };
  
      default:
        return state;
    }
  }