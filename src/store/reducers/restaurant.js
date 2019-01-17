const INITIAL_STATE={
	restaurants: [],
	currentRestaurant: {
	}
};

let ACTIONS={
	SET_RESTAURANTS: ({ ...state }, { restaurants }) => ({ ...state, restaurants }),
	SET_RESTAURANT: ({ ...state }, { currentRestaurant }) => ({ ...state, currentRestaurant })
};

export default (state = INITIAL_STATE, action) => action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state;