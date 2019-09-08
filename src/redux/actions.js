import { SET_FRAME_DATA, SET_SCROLL_POSITION } from "./actionTypes";

export const setFrameData = payload => ({
  type: SET_FRAME_DATA,
  payload
});

export const setScrollPosition = payload => ({
  type: SET_SCROLL_POSITION,
  payload
});
