const INITIAL_STATE={
	currentOrder: {
		id: '',
		startDate: '',
		totalPrice: 0,
		items: [],
		restaurantId: '',
		status: ''
	},
	history: []
};

let ACTIONS={
	SET_HISTORY: ({ ...state }, { history }) => ({ ...state, history }),
	START_ORDER: ({ ...state }, { currentOrder }) => ({ ...state, currentOrder, history: [...state.history, currentOrder] }),
	UPDATE_CURRENT_ORDER: ({ ...state }, { currentOrder }) => ({ ...state, currentOrder: { ...state.currentOrder, ...currentOrder } }),
	// ADD_CURRENT_ORDER_ITEM: ({ ...state}, { item }) => ({ ...state, currentOrder: { ...state.currentOrder, }})
	REMOVE_CURRENT_ORDER_ITEM: ({ items, ...state }, { itemId }) => ({
		todos: items.filter(i => i._id!==itemId),
		...state
	})
};

export default (state=INITIAL_STATE, action) => action&&ACTIONS[action.type]? ACTIONS[action.type](state, action):state;