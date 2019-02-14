import react, { Component } from 'react';
import axios from 'axios';

import RestaurantsList from './restaurants-list/RestaurantsList.jsx';
// import RestaurantMenu from './restaurant-menu/RestaurantMenu.jsx';

class RestaurantsContainer extends Component {

	state={
		loading: false
	}

	fetchRestaurants=() => {
		if (!this.props.restaurants.list.length) {
			this.setState({ loading: true });
			axios.get('https://us-central1-billy-web.cloudfunctions.net/funcApp/api/restaurants')
				// axios.get('http://192.168.0.111:4000/api/restaurants')
				.then(({ data }) => {
					this.setState({ loading: false });
				});
		}
	}

	componentWillMount() {
		this.fetchRestaurants();
	}

	render() {

		return (
			<RestaurantsList />
		);
	}
}

export default RestaurantsContainer;
