import React, { Component } from 'react';
import axios from 'axios';

import RestaurantsList from './routes/restaurants/restaurants-list/RestaurantsList.jsx';

import Header from './components/Header.jsx';

class App extends Component {

    state = {
        restaurants: []
    }

	fetchRestaurants=() => {
		if (!this.state.restaurants.length) {
			axios.get('https://us-central1-billy-web.cloudfunctions.net/funcApp/api/restaurants')
				// axios.get('http://192.168.0.111:4000/api/restaurants')
				.then(({ data }) => {
					this.setState({ restaurants: data });
				});
		}
	}

	componentWillMount() {
		this.fetchRestaurants();
	}

	render() {
		return (
			<div id="app">
				<Header />
				<main className="route-container">
					<RestaurantsList restaurants={this.state.restaurants} />
				</main>
			</div>
		);
	}
}

export default App;