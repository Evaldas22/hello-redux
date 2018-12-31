import {CHANGE_NAME} from './types';

// action creator
export const changeName = (name) => {
    return {
      type: CHANGE_NAME,
      payload: name
    }
  }