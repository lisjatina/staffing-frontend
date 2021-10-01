import { GET_HISTORY, GET_HISTORY_LIST } from "../actions/types";

const initialState = {
    histories: [],
    history: {}
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_HISTORY_LIST:
        return {
          ...state,
          histories: action.payload
        };

        case GET_HISTORY:
          return {
            ...state,
            history: action.payload
          };

      default:
        return state;
    }
  }