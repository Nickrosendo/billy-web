import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import reduce from '../../../store/reducers';
import * as actions from '../../../store/actions';

import RestaurantMenuItem from './RestaurantMenuItem.jsx';

import style from './style';

@connect(reduce, actions)
class RestaurantMenu extends Component {

	state = {
		currentRestaurant: {}
	}

	handleAddOrderItem(item) {
		if (this.props.order.order.items.length > 0) {
			let updatedItems = [...this.props.order.order.items, item];
			const updatedTotalPrice = updatedItems.map(i => (i.quantity * i.price)).reduce((a, b) => (a + b), 0);

			this.props.updateOrder({
				...this.props.order.order,
				totalPrice: updatedTotalPrice,
				items: [...updatedItems]
			});
		}
		else {
			const totalPrice = (item.quantity * item.price);

			this.props.createOrder({
				id: new Date(),
				restaurantId: this.state.currentRestaurant,
				totalPrice,
				items: [item]
			});

		}
	}

	menuItemsMap() {
		if (this.state.currentRestaurant) {
			return this.state.currentRestaurant.menu.map(item => (
				<RestaurantMenuItem restaurantId={this.state.currentRestaurant._id} item={item} handleAddOrderItem={this.handleAddOrderItem} />
			));
		}
		return (
			<p>Sem restaurantes</p>
		);
	}

	constructor(...args) {
		super(...args);
		if (this.props.restaurant.restaurants && this.props.id) {
			const currentRestaurant = this.props.restaurant.restaurants.find(r => r._id===this.props.id);
			this.setState({ currentRestaurant });
			console.log('current:: ', this.state.currentRestaurant);
		}
		this.handleAddOrderItem = this.handleAddOrderItem.bind(this);
		this.menuItemsMap = this.menuItemsMap.bind(this);
	}

	render() {
		console.log('restaurantMenu props: ', this.props);
		return (
			<div class={style.detailContainer}>
				<h1 class="text-center">
					{this.state.currentRestaurant.name}
				</h1>
				{this.menuItemsMap()}
			</div>
		);
	}
}

export default RestaurantMenu;