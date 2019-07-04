import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import {
	Switch,
	Route
} from 'react-router-dom';

import RestaurantsList from './restaurants-list/RestaurantsList';
import RestaurantMenu from './restaurant-menu/RestaurantMenu';
import OrderLabel from '../../components/order-label/OrderLabel.jsx';

import { setRestaurants } from '../../store/actions/restaurants';
import Loading from '../../components/Loading';

const LazyRestaurantList = lazy(() => import('./restaurants-list/RestaurantsList'));
const LazyRestaurantMenu = lazy(() => import('./restaurant-menu/RestaurantMenu'));
const LazyOrderLabel = lazy(() => import('../../components/order-label/OrderLabel.jsx'));

interface Order {
	id: String,
	startDate: Date,
	totalPrice: Number,
	items: Array<any>,
	restaurantId: String,
	status: String
}

interface Restaurant {
	_id: string,
	name: string,
	logo: string,
	menu: Array<any>,
	location: Object
}

interface IProps {
	orders: {
		history: Array<Order>,
		currentOrder: Order
	},
	restaurants: {
		list: Array<any>,
		currentRestaurant: Object
	},
	setRestaurants: Function
}

class RestaurantsContainer extends Component<IProps> {

	render() {
		return (
			<div style={this.props.orders.currentOrder && this.props.orders.currentOrder.items && this.props.orders.currentOrder.items.length > 0 ? { paddingBottom: 66 } : {}}>
				<Switch>
					<Route path="/restaurantes" exact>
						<Suspense fallback={<Loading />}>
							<LazyRestaurantList restaurants={this.props.restaurants.list} />
						</Suspense>
					</Route>
					<Route path="/restaurantes/:id" component={RestaurantMenu} />
				</Switch>
				<OrderLabel />
			</div>
		);
	}
}

interface mappedState {
	orders: {
		history: Array<Order>,
		currentOrder: Order
	},
	restaurants: {
		list: Array<Restaurant>,
		currentRestaurant: Object
	}
}

const mapStateToProps = (state: mappedState) => ({ restaurants: state.restaurants, orders: state.orders })


export default connect(mapStateToProps, {
	setRestaurants
})(RestaurantsContainer);
