import axios from 'axios';

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

export const fetchRestaurants=() => async (dispatch) => {
	try {
		const { data }=await axios.get('https://us-central1-billy-web.cloudfunctions.net/funcApp/api/restaurants')
		dispatch({
			type: 'SET_RESTAURANTS',
			list: data
		})
		return true;
	} catch(error) {
		if(error) {
			console.error('Error fetching Restaurants: ', error);
			return false
		}
	}
}