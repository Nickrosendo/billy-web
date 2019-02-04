import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import reduce from '../../../store/reducers';
import * as actions from '../../../store/actions';

import RestaurantMenuItem from './RestaurantMenuItem.jsx';

import style from './style';

@connect(reduce, actions)
class RestaurantMenu extends Component {

	state={
		currentRestaurant: {}
	}

	handleAddOrderItem=(item) => {
		if (this.props.orders.currentOrder.items.length>0) {
			let updatedItems=[...this.props.order.order.items, item];
			const updatedTotalPrice=updatedItems.map(i => (i.quantity*i.price)).reduce((a, b) => (a+b), 0);

			this.props.updateOrder({
				...this.props.order.order,
				totalPrice: updatedTotalPrice,
				items: [...updatedItems]
			});
		}
		else {
			const totalPrice=(item.quantity*item.price);
			
			this.props.startOrder({
				id: new Date(),
				restaurantId: this.props.restaurants.currentRestaurant._id,
				restaurantName: this.props.restaurants.currentRestaurant.name,
				totalPrice,
				items: [item],
				status: 'iniciada'
			});

		}
	}

	menuItemsMap=() => {
		if (this.props.restaurants.currentRestaurant && this.props.restaurants.currentRestaurant.menu) {
			return this.props.restaurants.currentRestaurant.menu.map(item => (
				<RestaurantMenuItem restaurantId={this.props.restaurants.currentRestaurant._id} item={item} handleAddOrderItem={this.handleAddOrderItem} />
			));
		}
		return (
			<p>Sem restaurante</p>
		);
	}

	componentWillMount() {
		if (this.props.restaurants.list.length&&this.props.id) {
			const currentRestaurant=this.props.restaurants.list.find(r => r._id===this.props.id);
			this.props.setRestaurant(currentRestaurant);
		}
	}

	render() {
		return (
			<div class={style.detailContainer}>
				<h1 class="text-center">
					{this.props.restaurants.currentRestaurant.name}
				</h1>
				{this.menuItemsMap()}
			</div>
		);
	}
}

export default RestaurantMenu;