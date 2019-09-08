export const getAllFrames = store => store.frames;
export const getFrameById = (store, id) =>
  store.frames.find(frame => frame.id === id);
export const getScrollPosition = store => store.scrollPosition;
