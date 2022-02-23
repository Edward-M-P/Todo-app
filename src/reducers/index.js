import {
  FETCH_TODOS,
  SET_LOADING_TRUE,
  SET_INPUT_ERROR_TRUE,
  SET_INPUT_ERROR_FALSE,
  DELETE_TODO,
} from "../actions/types";

const initialState = {
  inputError: false,
  data: [],
  isLoadingData: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      console.log(action.payload);
      console.log(state);
      return {
        inputError: state.inputError,
        data: action.payload,
        isLoadingData: false,
      };
    case SET_LOADING_TRUE:
      return {
        inputError: state.inputError,
        isLoadingData: true,
        data: state.data,
      };
    case SET_INPUT_ERROR_TRUE:
      console.log("input error");
      return {
        inputError: true,
        isLoadingData: state.isLoadingData,
        data: state.data,
      };
    case SET_INPUT_ERROR_FALSE:
      return {
        inputError: false,
        isLoadingData: state.isLoadingData,
        data: state.data,
      };
    default:
      return state;
  }
}
