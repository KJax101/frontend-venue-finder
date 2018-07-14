import {
  FETCH_HOURS_START, 
  FETCH_HOURS_SUCCESS, 
  FETCH_HOURS_ERROR, 
  fetchHoursStart, 
  fetchHoursSuccess, 
  fetchHoursError
} from './hours_actions' 

describe("fetchHoursStart()", () => {
  it("should return the correct action", () => {
    const action = fetchHoursStart() 
    expect(action.type).toEqual(FETCH_HOURS_START);
  })
})

describe("FETCH_HOURS_START", () => {
  it("Should evaluate to correct string", () => { 
    expect(FETCH_HOURS_START).toEqual("FETCH_HOURS_START");
  });
}); 

describe("fetchHoursSuccess()", () => {
  it("should return the correct action", () => {
    const action = fetchHoursSuccess([1, 2, 3])
    expect(action.type).toEqual(FETCH_HOURS_SUCCESS); expect(action.results).toEqual([1, 2, 3])
  })
}) 


describe("FETCH_HOURS_SUCCESS", () => {
  it("Should evaluate to correct string", () => { 
    expect(FETCH_HOURS_SUCCESS).toEqual("FETCH_HOURS_SUCCESS");
  });
}); 

describe("fetchHoursError()", () => {
  it("should return the correct action", () => {
    const action = fetchHoursError();
    expect(action.type).toEqual(FETCH_HOURS_ERROR);
  });
}); 

describe("FETCH_HOURS_ERROR", () => {
  it("Should evaluate to correct string", () => { 
    expect(FETCH_HOURS_ERROR).toEqual("FETCH_HOURS_ERROR");
  });
});
