import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import reduce from '../../../redux/reducers';
import * as actions from '../../../redux/actions';

import RestaurantMenuItem from './RestaurantMenuItem.jsx';

import style from './style';

@connect(reduce, actions)
class RestaurantMenu extends Component {

	handleAddOrderItem(item) {
		if (this.props.order.items.length > 0) {
			let updatedItems = [...this.props.order.items, item];
			const updatedTotalPrice = updatedItems.map(i => (i.quantity * i.price)).reduce((a, b) => (a + b), 0);

			this.props.updateOrder({
				...this.props.order,
				totalPrice: updatedTotalPrice,
				items: [...updatedItems]
			});
		}
		else {
			const totalPrice = (item.quantity * item.price);

			this.props.createOrder({
				id: new Date(),
				restaurantId: this.props.restaurant._id,
				totalPrice,
				items: [item]
			});

		}
	}

	menuItemsMap() {
		return this.props.restaurant.menu.map(item => (
			<RestaurantMenuItem restaurantId={this.props.restaurant._id} item={item} handleAddOrderItem={this.handleAddOrderItem} />
		));
	}

	constructor(...args) {
		super(...args);
		this.handleAddOrderItem = this.handleAddOrderItem.bind(this);
		this.menuItemsMap = this.menuItemsMap.bind(this);
	}

	render() {
		return (
			<div class={style.detailContainer}>
				<h1 class="text-center">
					{this.props.restaurant.name}
				</h1>
				{this.menuItemsMap()}
			</div>
		);
	}
}

export default RestaurantMenu;