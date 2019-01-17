export function setRestaurants(restaurants) {
	return {
		type: 'SET_RESTAURANTS',
		restaurants
	};
}

export function setRestaurant(currentRestaurant) {
	return {
		type: 'SET_RESTAURANT',
		currentRestaurant
	};
}