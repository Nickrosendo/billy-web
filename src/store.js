import { createStore } from 'redux';

let ACTIONS = {
	SET_PREVIOUS_ROUTE: ({ ...state }, { previousRoute }) => ({ ...state, previousRoute }),
	ADD_ORDER_ITEM: ({ ...state }, { item }) => {
		let itemsPrice = 0;
		for (let i = 0; i < item.quantity; i++) {
			itemsPrice += item.price;
		}
		const totalPrice = state.order.totalPrice + itemsPrice;
		console.log('add store state: ', state);
		return {
			...state,
			order: {
				...state.order,
				id: state.order.id,
				totalPrice,
				items: [...state.order.items, item],
				restaurantId: item.restaurantId
			}
		};
	},

	REMOVE_ORDER_ITEM: ({ items, ...state }, { itemId }) => ({
		todos: items.filter(i => i._id !== itemId),
		...state
	})
};

const INITIAL_STATE = {
	order: {
		id: new Date(),
		totalPrice: 0,
		items: [],
		restaurantId: undefined
	},
	previousRoute: ''
};

let hasDevToolsExtension = () => typeof devToolsExtension === 'function' ? window.devToolsExtension() : undefined;

export default createStore((state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL_STATE, hasDevToolsExtension());