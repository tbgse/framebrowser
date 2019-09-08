import * as actions from "./actions";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action to set frame data", () => {
    const payload = {
      something: "myData",
      anotherThing: "testData"
    };
    const expectedAction = {
      type: types.SET_FRAME_DATA,
      payload
    };
    expect(actions.setFrameData(payload)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set filter data", () => {
    const payload = {
      key: "acetate",
      value: true
    };
    const expectedAction = {
      type: types.SET_FILTER,
      payload
    };
    expect(actions.setFilter(payload)).toEqual(expectedAction);
  });
});
