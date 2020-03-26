// Action Types
import { CHANGE_OPENING_STATUS } from 'src/actions/header';

// Initial State
const initialState = {
  projectIsOpen: false,
};

// Reducer
const headerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_OPENING_STATUS:
      return {
        ...state,
        projectIsOpen: !initialState.projectIsOpen,
      };

    default:
      return state;
  }
};

export default headerReducer;
