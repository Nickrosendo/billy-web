const INITIAL_STATE = {
  list: [],
  currentRestaurant: {},
};

let ACTIONS = {
  SET_RESTAURANTS: ({ ...state }, { list }) => ({ ...state, list }),
  SET_RESTAURANT: ({ ...state }, { currentRestaurant }) => ({
    ...state,
    currentRestaurant,
  }),
};

const restaurantsReducer = (state = INITIAL_STATE, action) =>
  action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state;

export default restaurantsReducer;
