export function createOrder(order) {
	return {
		type: 'CREATE_ORDER',
		order
	};
}

export function updateOrder(order) {
	return {
		type: 'UPDATE_ORDER',
		order
	};
}

export function setPreviousRoute(previousRoute) {
	return {
		type: 'SET_PREVIOUS_ROUTE',
		previousRoute
	};
}

export function setRestaurant(openedRestaurant) {
	return {
		type: 'SET_RESTAURANT',
		openedRestaurant
	};
}

export function removeOrderItem(item) {
	return {
		type: 'REMOVE_ORDER_ITEM',
		item
	};
}