import reducer from "./reducers";
import * as types from "./actionTypes";

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      frames: [],
      scrollPosition: 0,
      filters: {
        acetate: false,
        bio_acetate: false,
        metal: false,
        combi: false,
        titanium: false
      }
    });
  });

  it("should handle SET_FRAME_DATA", () => {
    const testPayload = {
      frames: [
        {
          name: "testFrame"
        }
      ]
    };
    expect(
      reducer(undefined, {
        type: types.SET_FRAME_DATA,
        payload: testPayload
      })
    ).toEqual({
      frames: testPayload,
      scrollPosition: 0,
      filters: {
        acetate: false,
        bio_acetate: false,
        metal: false,
        combi: false,
        titanium: false
      }
    });
  });

  it("should handle SET_FILTER", () => {
    const testPayload = {
      key: "acetate",
      value: true
    };
    expect(
      reducer(undefined, {
        type: types.SET_FILTER,
        payload: testPayload
      })
    ).toEqual({
      frames: [],
      scrollPosition: 0,
      filters: {
        acetate: true,
        bio_acetate: false,
        metal: false,
        combi: false,
        titanium: false
      }
    });
  });
});
