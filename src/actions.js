export function addOrderItem(item) {
	return {
		type: 'ADD_ORDER_ITEM',
		item
	};
}

export function setPreviousRoute(previousRoute) {
	return {
		type: 'SET_PREVIOUS_ROUTE',
		previousRoute
	};
}

export function removeOrderItem(item) {
	return {
		type: 'REMOVE_ORDER_ITEM',
		item
	};
}