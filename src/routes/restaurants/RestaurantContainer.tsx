import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
	Switch,
	Route
} from 'react-router-dom';

import RestaurantsList from './restaurants-list/RestaurantsList';
import RestaurantMenu from './restaurant-menu/RestaurantMenu';

// redux actions
import { setRestaurants } from '../../store/actions/restaurants';

interface IProps {
	restaurants: {
		list: Array<any>,
		currentRestaurant: Object
	},
	setRestaurants: Function
}

class RestaurantsContainer extends Component<IProps> {

	state = {
		loading: false
	}

	fetchRestaurants = () => {
		this.setState({ loading: true });
		axios.get('https://us-central1-billy-web.cloudfunctions.net/funcApp/api/restaurants')
			// axios.get('http://192.168.0.111:4000/api/restaurants')
			.then(({ data }) => {
				this.props.setRestaurants([...data]);
				this.setState({ loading: false });
			});
	}

	componentWillMount() {
		this.fetchRestaurants();
	}

	render() {

		console.log('restaurant props: ', this.props);
		return this.state.loading ? null : (
			<Switch>
				<Route path="/" exact component={() => <RestaurantsList restaurants={this.props.restaurants.list} />} />
				<Route path="/:id" component={RestaurantMenu} />
			</Switch>
		);
	}
}


interface Restaurant {
	_id: string,
	name: string,
	logo: string,
	menu: Array<any>,
	location: Object
}

interface mappedState {
	restaurants: {
		list: Array<Restaurant>,
		currentRestaurant: Object
	}
}

const mapStateToProps = (state: mappedState) => ({ restaurants: state.restaurants })

export default connect(mapStateToProps, {
	setRestaurants
})(RestaurantsContainer);
