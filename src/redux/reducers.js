import { SET_FRAME_DATA, SET_SCROLL_POSITION } from "./actionTypes";

const initialState = {
  frames: [],
  scrollPosition: 0
};

export default function(state = initialState, action) {
  if (action.type === SET_FRAME_DATA) {
    return {
      ...state,
      frames: action.payload
    };
  } else if (action.type === SET_SCROLL_POSITION) {
    return {
      ...state,
      scrollPosition: action.payload
    };
  } else {
    return state;
  }
}
