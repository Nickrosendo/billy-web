export function CREATE_ORDER(order) {
	return {
		type: 'CREATE_ORDER',
		order
	};
}

export function UPDATE_ORDER(order) {
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

export function removeOrderItem(item) {
	return {
		type: 'REMOVE_ORDER_ITEM',
		item
	};
}