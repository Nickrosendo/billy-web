import { createStore } from 'redux';

let ACTIONS = {
	SET_PREVIOUS_ROUTE: ({ ...state }, { previousRoute }) => ({ ...state, previousRoute }),
	SET_RESTAURANT: ({ ...state }, { openedRestaurant }) => ({ ...state, openedRestaurant }),
	CREATE_ORDER: ({ ...state }, { order }) => ({ ...state, order }),
	UPDATE_ORDER: ({ ...state }, { order }) => ({ ...state, order: { ...state.order, ...order } }),
	REMOVE_ORDER_ITEM: ({ items, ...state }, { itemId }) => ({
		todos: items.filter(i => i._id !== itemId),
		...state
	})
};

const INITIAL_STATE = {
	order: {
		id: '',
		startDate: '',
		totalPrice: 0,
		items: [],
		restaurantId: ''
	},
	orders: [],
	restaurants: [],
	openedRestaurant: {
	},
	previousRoute: ''
};

let hasDevToolsExtension = () => typeof devToolsExtension === 'function' ? window.devToolsExtension() : undefined;

export default createStore((state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL_STATE, hasDevToolsExtension());