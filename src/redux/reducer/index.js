import { ALGO, TOGGLE_COLOR_MODE, SIDEBAR_PROVIDER } from "../actions/types";

const initialState = {
  algo: null,
  mode: "dark",
  sidebarProvider: {}
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALGO:
      return {
        ...state,
        algo: payload,
      };
    case SIDEBAR_PROVIDER:
      return {...state, sidebarProvider: payload}
    case TOGGLE_COLOR_MODE:
      return { ...state, mode: state.mode === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export default rootReducer;
