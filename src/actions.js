export function addOrderItem(item) {
	return {
		type: 'ADD_ORDER_ITEM',
		item
	};
}

export function removeOrderItem(item) {
	return {
		type: 'REMOVE_ORDER_ITEM',
		item
	};
}