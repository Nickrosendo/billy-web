import React, { Component } from 'react';
import { connect } from 'react-redux';

import reduce from '../../../store/reducers';
import { updateOrder, startOrder } from '../../../store/actions/orders';
import { setRestaurant } from '../../../store/actions/restaurants';

import RestaurantMenuItem from './RestaurantMenuItem';

import style from './RestaurantMenu.module.css';

interface MenuItem {
	_id: string,
	img: string,
	name: String,
	price: number
}


interface IProps {
	restaurants: {
		list: Array<any>,
		currentRestaurant: {
			name: String,
			menu: Array<MenuItem>
		}
	},
	orders: {
		currentOrder: {
			items: Array<any>
		}
	},
	match: any,
	setRestaurant: Function,
	startOrder: Function,
	updateOrder: Function
}

class RestaurantMenu extends Component<IProps> {

	state = {
		currentRestaurant: {}
	}

	handleAddOrderItem = (item: Object) => {
		// if (!this.props.firebase.auth.uid) {
		// 	return route('/login', true);
		// }
		// if (this.props.orders.currentOrder.items.length>0) {
		// 	let updatedItems=[...this.props.order.order.items, item];
		// 	const updatedTotalPrice=updatedItems.map(i => (i.quantity*i.price)).reduce((a, b) => (a+b), 0);

		// 	this.props.updateOrder({
		// 		...this.props.order.order,
		// 		totalPrice: updatedTotalPrice,
		// 		items: [...updatedItems]
		// 	});
		// }
		// else {
		// 	const totalPrice=(item.quantity*item.price);

		// 	this.props.startOrder({
		// 		id: new Date(),
		// 		restaurantId: this.props.restaurants.currentRestaurant._id,
		// 		restaurantName: this.props.restaurants.currentRestaurant.name,
		// 		totalPrice,
		// 		items: [item],
		// 		status: 'iniciada'
		// 	});

		// }
	}

	menuItemsMap = () => {
		if (this.props.restaurants.currentRestaurant && this.props.restaurants.currentRestaurant.menu) {
			return this.props.restaurants.currentRestaurant.menu.map(item => (
				<RestaurantMenuItem item={item} key={item._id} />
			));
		}
		return (
			<p>Sem restaurante</p>
		);
	}

	componentWillMount() {
		if (this.props.restaurants.list.length && this.props.match.params.id) {
			const currentRestaurant = this.props.restaurants.list.find(r => r._id === this.props.match.params.id);
			this.props.setRestaurant(currentRestaurant);
		}
	}

	render() {
		return (
			<div className={style.detailContainer}>
				<h1 className="text-center">
					{this.props.restaurants.currentRestaurant.name}
				</h1>
				{this.menuItemsMap()}
			</div>
		);
	}
}

interface mappedState {	
	restaurants: {
		list: Array<any>,
		currentRestaurant: {
			name: String,
			menu: Array<MenuItem>
		}
	},
	orders: {
		currentOrder: Object
	}
}

const mapStateToProps = (state: mappedState) => ({ restaurants: state.restaurants });

export default connect(mapStateToProps, {
	setRestaurant,
	startOrder,
	updateOrder
})(RestaurantMenu);