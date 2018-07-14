import savedReducer from './saved_reducer' 
describe('savedReducer receive', () => {
  it('Should add venues to the state on fetch success', () => { 
    let state = { results: [], loading: false, errors: [] }; 
    state = savedReducer(state, {
      type: "RECEIVE_SAVED_VENUES",
      results: [1, 2, 3]
    }); 

    expect(state).toEqual({ results: [1, 2, 3], loading: false, errors: [] });
  });
});   

describe('savedReducer delete', () => {
  it('Should delete venues from the state on delete', () => { 
    let state = { results: [{ name: 1 }, { name: 2 }, { name: 3 }], loading: false, errors: [] }; 
    state = savedReducer(state, { type: "DELETE_SAVED_VENUE", name: 2 }); 

    expect(state).toEqual({
      results: [{ name: 1 }, { name: 3 }],
      loading: false,
      errors: []
    });
  });
}); 
