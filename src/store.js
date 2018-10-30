import { createStore } from 'redux';

let ACTIONS = {
	ADD_ORDER_ITEM: ({ items, ...state }, { item }) => ({
		items: items.push(item),
		...state
	}),

	REMOVE_ORDER_ITEM: ({ items, ...state }, { itemId }) => ({
		todos: items.filter( i => i._id !== itemId ),
		...state
	})
};

const INITIAL_STATE = {
	order: {
		totalPrice: 0,
		items: []
	}
};

let hasDevToolsExtension = () => typeof devToolsExtension === 'function' ? window.devToolsExtension() : undefined;

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL_STATE, hasDevToolsExtension());