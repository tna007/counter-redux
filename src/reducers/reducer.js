import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.addFIVE:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.removeFIVE:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case actionTypes.STORE_RESULTS:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.RESET:
      return {
        ...state,
        counter: 0,
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((item) => item.id !== action.payload),
      };

    default:
      break;
  }
  return state;
};

const initialState = {
  counter: 50,
  results: [],
};

export default reducer;
