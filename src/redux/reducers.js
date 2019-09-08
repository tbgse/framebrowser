import { SET_FRAME_DATA, SET_SCROLL_POSITION, SET_FILTER } from "./actionTypes";

const initialState = {
  frames: [],
  scrollPosition: 0,
  filters: {
    acetate: false,
    bio_acetate: false,
    metal: false,
    combi: false,
    titanium: false
  }
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
  } else if (action.type === SET_FILTER) {
    const updatedFilters = {
      ...state.filters,
      [action.payload.key]: action.payload.value
    };
    return {
      ...state,
      filters: updatedFilters
    };
  } else {
    return state;
  }
}
