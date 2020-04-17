// Action Types
import { CHANGE_OPENING_STATUS } from 'src/actions/header';

// Initial State
const initialState = {
  menuIsOpen: true,
};

// Reducer
const headerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_OPENING_STATUS:
      return {
        ...state,
        menuIsOpen: action.bool,
      };

    default:
      return state;
  }
};

export default headerReducer;
