import {
  GET_MOVIES,
} from '../types';

const movieReducer = (state, action) => {
  switch (action.type) {

      case GET_MOVIES:
        return {
          ...state,
          movies: action.payload,
          loading: false,
        };
    default:
      return state;
  }
};

export default movieReducer;
