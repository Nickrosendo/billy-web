const INITIAL_STATE={
	currentOrder: { },
	history: []
};

let ACTIONS={
	SET_HISTORY: ({ ...state }, { history }) => ({ ...state, history }),
	SET_CURRENT_ORDER: ({ ...state }, { currentOrder }) => {
		console.log('reducer currentOrder: ', currentOrder);
		const newOrder = !state.history.some(o => o.id === currentOrder.id)
		if(newOrder) {
			return ({ ...state, currentOrder, history: [...state.history, currentOrder] })
		} else {
			return ({ ...state, currentOrder, history: [...state.history] })
		}
	},
	UPDATE_CURRENT_ORDER: ({ ...state }, { currentOrder }) => ({ ...state, currentOrder: { ...state.currentOrder, ...currentOrder } }),
	// ADD_CURRENT_ORDER_ITEM: ({ ...state}, { item }) => ({ ...state, currentOrder: { ...state.currentOrder, }})
	REMOVE_CURRENT_ORDER_ITEM: ({ items, ...state }, { itemId }) => ({
		todos: items.filter(i => i._id!==itemId),
		...state
	})
};

export default (state=INITIAL_STATE, action) => action&&ACTIONS[action.type]? ACTIONS[action.type](state, action):state;