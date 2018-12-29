import {CHANGE_NAME} from '../constants';

// action creator
export const changeName = (name) => {
    return {
      type: CHANGE_NAME,
      payload: {
        name
      }
    }
  }