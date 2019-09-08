export const getAllFrames = store => store.frames;
export const getFrameById = (store, id) =>
  store.frames.find(frame => frame.id === id);
export const getScrollPosition = store => store.scrollPosition;
export const getAllFilters = store => store.filters;
export const getAllFilteredFrames = store => {
  let filteredFrames = [];
  const allFrames = getAllFrames(store);
  const filters = getAllFilters(store);
  let hasActiveFilters = false;

  // checking if no filters are active and returning all frames in that case
  for (let key in filters) {
    if (!!filters[key]) {
      hasActiveFilters = true;
    }
  }
  if (!hasActiveFilters) {
    return allFrames;
  }
  const allowedMaterials = [];
  if (filters.acetate) allowedMaterials.push("acetate");
  if (filters.bio_acetate) allowedMaterials.push("bio_acetate");
  if (filters.metal) allowedMaterials.push("metal");
  if (filters.combi) allowedMaterials.push("combi");
  if (filters.titanium) allowedMaterials.push("titanium");
  filteredFrames = allFrames.filter(frame =>
    frame.material.some(material => allowedMaterials.indexOf(material) >= 0)
  );

  return filteredFrames;
};
