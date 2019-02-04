import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import axios from 'axios';

import reduce from '../../store/reducers';
import * as actions from '../../store/actions';

import OrderLabel from '../../components/order-label/OrderLabel.jsx';
import FetchingLoader from '../../components/fetching-loader/FetchingLoader.jsx';
import RestaurantsList from './restaurants-list/RestaurantsList.jsx';
import RestaurantMenu from './restaurant-menu/RestaurantMenu.jsx';

@connect(reduce, actions)
class RestaurantsContainer extends Component {

	state={
		loading: false
	}

	handleAddOrderItem= (orderItem) => {
		this.props.addOrderItem(orderItem);
	}

	fetchRestaurants=() => {
		if (!this.props.restaurants.list.length) {
			this.setState({ loading: true });
			axios.get('https://us-central1-billy-web.cloudfunctions.net/funcApp/api/restaurants')
				// axios.get('http://192.168.0.111:4000/api/restaurants')
				.then(({ data }) => {
					this.props.setRestaurants(data);
					this.setState({ loading: false });
				});
		}
	}

	componentWillMount(){
		this.fetchRestaurants();
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	// console.log('restaurantContainer current props: ', this.props);
	// 	console.log('restaurantContainer Nextprops: ', nextProps);
	// 	console.log('restaurantContainer NextState: ', nextState);
	// 	if (nextProps.orders.currentOrder.items.length !== this.props.orders.currentOrder.items.length) {
	// 		console.log('entrou');
	// 		return true;
	// 	}
	// }

	render() {
		const routeContent=this.props.id? <RestaurantMenu id={this.props.id} addItem={this.handleAddOrderItem} />:<RestaurantsList restaurants={this.props.restaurants.list} />;
		const hasOrder = this.props.orders.currentOrder.items.length > 0 ? <OrderLabel /> : null;
		return (
			<div>
				<div style={this.props.orders.currentOrder.items.length>0? 'padding-bottom: 66px;':''}>
					{
						this.state.loading? <FetchingLoader />: routeContent
					}
				</div>
				{hasOrder}
			</div>
		);
	}
}

export default RestaurantsContainer;
