import { SET_FRAME_DATA, SET_SCROLL_POSITION, SET_FILTER } from "./actionTypes";

export const setFrameData = payload => ({
  type: SET_FRAME_DATA,
  payload
});

export const setScrollPosition = payload => ({
  type: SET_SCROLL_POSITION,
  payload
});

export const setFilter = payload => ({
  type: SET_FILTER,
  payload
});
