export function setRestaurants(list) {
	return {
		type: 'SET_RESTAURANTS',
		list
	};
}

export function setRestaurant(currentRestaurant) {
	return {
		type: 'SET_RESTAURANT',
		currentRestaurant
	};
}