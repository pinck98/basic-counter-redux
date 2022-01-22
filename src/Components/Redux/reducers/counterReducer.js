import { DECREAMENT, INCREAMENT } from "../Actions/types";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case INCREAMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREAMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;
