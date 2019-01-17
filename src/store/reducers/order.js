const INITIAL_STATE={
	order: {
		id: '',
		startDate: '',
		totalPrice: 0,
		items: [],
		restaurantId: ''
	},
	user: {},
	orders: [],
	previousRoute: '',
	test: ''
};

let ACTIONS={
	SET_ORDERS: ({ ...state }, { orders }) => ({ ...state, orders }),
	SET_USER: ({ ...state }, { user }) => ({ ...state, user }),
	SET_PREVIOUS_ROUTE: ({ ...state }, { previousRoute }) => ({ ...state, previousRoute }),
	CREATE_ORDER: ({ ...state }, { order }) => ({ ...state, order }),
	UPDATE_ORDER: ({ ...state }, { order }) => ({ ...state, order: { ...state.order, ...order } }),
	TEST_THUNK: ({ ...state }, { test }) => ({ ...state, test }),
	REMOVE_ORDER_ITEM: ({ items, ...state }, { itemId }) => ({
		todos: items.filter(i => i._id!==itemId),
		...state
	})
};

export default (state = INITIAL_STATE, action) => action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state;