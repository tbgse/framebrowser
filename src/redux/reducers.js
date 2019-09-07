import { SET_FRAME_DATA } from "./actionTypes";

const initialState = {
  frames: []
};

export default function(state = initialState, action) {
  if (action.type === SET_FRAME_DATA) {
    return {
      ...state,
      frames: action.payload
    };
  } else {
    return state;
  }
}
