import { combineReducers } from "redux";

const INITIAL_STATE = {
  problemData: [],
  similarData: [],
  activeData: {},
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PROBLEM_DATA": {
      return {
        ...state,
        problemData: action.payload,
      };
    }
    case "HANDLE_SIMILAR_DATA": {
      return {
        ...state,
        similarData: action.payload,
        activeData: action.activeData,
      };
    }
    case "HANDLE_DELETE_DATA": {
      return {
        ...state,
        problemData: action.payload,
        activeData: action.activeData,
      };
    }
    case "HANDLE_ADD_DATA": {
      return {
        ...state,
        problemData: action.problemResult,
        similarData: action.similarResult,
      };
    }
    case "HANDLE_CHANGE_DATA": {
      return {
        ...state,
        problemData: action.problemResult,
        similarData: action.similarResult,
        activeData: action.activeData,
      };
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  dataReducer,
});
