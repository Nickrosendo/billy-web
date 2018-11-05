import { h, Component } from 'preact';
import axios from 'axios';
import { route } from 'preact-router';
import { connect } from 'preact-redux';

import reduce from '../../reducers';
import * as actions from '../../actions';


import style from './style';

import OrderLabel from './order/order-label/OrderLabel.jsx';
import RestaurantsList from './restaurant/restaurants-list/RestaurantsList.jsx';
import RestaurantDetails from './restaurant/restaurant-details/RestaurantDetails.jsx';

@connect(reduce, actions)
class Restaurants extends Component {
	
	state = {
		restaurants: [],
		fetchingData: true
	}

	fetchingLoader() {
		return (
			<h1 class="text-center">
				Carregando...
			</h1>
		);
	}

	restaurant() {
		const findRestaurant = this.state.restaurants.find(r => r._id === this.props.id);

		if (findRestaurant) {
			return (<RestaurantDetails addItem={this.addOrderItem} restaurant={findRestaurant} />);
		}
		return this.fetchingLoader();
	}

	goToDetails(id) {
		route(`/restaurantes/${id}`);
	}

	componentDidMount() {
		axios.get('https://billy-server.herokuapp.com/api/restaurants')
			// axios.get('http://192.168.0.111:4000/api/restaurants')
			.then(res => this.setState({ restaurants: res.data, fetchingData: false }));
	}

	render(props, state) {
		const routeContent = props.id ? this.restaurant() : <RestaurantsList restaurants={this.state.restaurants} />;
		return (
			<div>
				<OrderLabel />
				<div style={props.order.items.length > 0 ? { paddingTop: 56 } : null} >
					{
						this.state.fetchingData ? this.fetchingLoader() : routeContent
					}
				</div>
			</div>
		);
	}
}

export default Restaurants;
