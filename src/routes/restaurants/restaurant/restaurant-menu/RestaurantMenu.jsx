import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import reduce from '../../../../reducers';
import * as actions from '../../../../actions';

import RestaurantMenuItem from './RestaurantMenuItem.jsx';
import ConfirmOrder from './ConfirmOrder.jsx';

import style from './style';

@connect(reduce, actions)
class RestaurantMenu extends Component {

	state = {
		order: {
			id: '',
			totalPrice: 0,
			items: [],
			restaurantId: ''
		}
	}

	handleAddOrderItem(item) {
		const totalPrice = this.state.order.totalPrice + (item.price * item.quantity);
		const items = [...this.state.order.items, item];
		const updatedOrder = {
			...this.state.order,
			totalPrice,
			items
		};
		this.setState({ order: updatedOrder });
		console.log('state after add', this.state.order);
	}

	menuItemsMap() {
		return this.props.restaurant.menu.map(item => (
			<RestaurantMenuItem restaurantId={this.props.restaurant._id} item={item} addItem={this.handleAddOrderItem} />
		));
	}

	handleConfirmOrder() {
		console.log('confirmou');
	}

	hasConfirmOrder() {
		if (this.state.order.items.length > 0) {
			return (
				<ConfirmOrder unconfirmedOrder={this.state.order} handleConfirmOrder={this.handleConfirmOrder} />
			);
		}
		return null;
	}

	constructor(...args) {
		super(...args);
		this.handleAddOrderItem = this.handleAddOrderItem.bind(this);
		this.menuItemsMap = this.menuItemsMap.bind(this);
		this.handleConfirmOrder = this.handleConfirmOrder.bind(this);
		if (this.props.order && this.props.order.id) {
			this.setState({
				order: {
					...this.props.order
				}
			});
		}
		else {
			this.setState({
				order: {
					id: new Date(),
					totalPrice: 0,
					items: [],
					restaurantId: this.props.restaurant._id
				}
			});
		}
	}

	render() {
		return (
			<div class={style.detailContainer}>
				<h1 class="text-center">
					{this.props.restaurant.name}
				</h1>
				{this.menuItemsMap()}
				{this.hasConfirmOrder()}
			</div>
		);
	}
}

export default RestaurantMenu;

// const RestaurantDetails = (props) => {

// 	const menuItemsMap = props.restaurant.menu.map(item => (
// 		<RestaurantMenuItem restaurantId={props.restaurant._id} item={item} addItem={props.addItem} />
// 	));

// 	return (
// 		<div class={style.detailContainer}>
// 			<h1 class="text-center">
// 				{props.restaurant.name}
// 			</h1>
// 			{menuItemsMap}
// 		</div>
// 	);
// };

// export default RestaurantDetails;
