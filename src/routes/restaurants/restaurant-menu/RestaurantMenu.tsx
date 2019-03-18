import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCurrentOrder, setCurrentOrder, createOrder } from '../../../store/actions/orders';
import { setRestaurant } from '../../../store/actions/restaurants';

import RestaurantMenuItem from './RestaurantMenuItem';

import style from './RestaurantMenu.module.css';

interface MenuItem {
	_id: string,
	img: string,
	name: String,
	price: number,
	quantity?: number
}

interface Restaurant {
	_id: string,
	name: string,
	logo: string,
	menu: Array<any>,
	location: Object
}


interface IProps {
	history: Array<any>,
	restaurant?: {
		_id: string,
		name: string,
		logo: string,
		menu: Array<MenuItem>,
		location: Object
	},
	restaurants: {
		list: Array<Restaurant>,
		currentRestaurant: {
			_id: String,
			name: String,
			menu: Array<MenuItem>
		}
	},
	firebase: {
		auth: {
			uid: any
		}
	}
	orders: {
		currentOrder: {
			items: Array<any>,
			totalPrice: Number,
			restaurantId: String,
			status: String
		}
	},
	match: any,
	setRestaurant: Function,
	setCurrentOrder: Function,
	updateCurrentOrder: Function,
	createOrder: Function
}

class RestaurantMenu extends Component<IProps> {

	handleSetCurrentRestaurant = () => {
		if (this.props.restaurants.currentRestaurant && this.props.restaurants.currentRestaurant._id === this.props.match.params.id) {
			return false;
		}
		if (this.props.restaurants.list.length && this.props.match.params.id) {
			const currentRestaurant = this.props.restaurants.list.find(r => r._id === this.props.match.params.id);
			console.log('current::', currentRestaurant);
			this.props.setRestaurant(currentRestaurant);
		}
	}

	handleAddOrderItem = (item: MenuItem, context: React.Context<any>) => {
		console.log('item: ', item);
		console.log('context: ', context);
		if (!this.props.firebase.auth.uid) {
			return this.props.history.push('/login');
		}
		if (this.props.orders.currentOrder && this.props.orders.currentOrder.items && this.props.orders.currentOrder.items.length > 0 && this.props.orders.currentOrder.status !== 'finalizada') {
			let updatedItems = [...this.props.orders.currentOrder.items, item];
			const updatedTotalPrice = updatedItems.map(i => (i.quantity * i.price)).reduce((a, b) => (a + b), 0);

			this.props.updateCurrentOrder({
				...this.props.orders.currentOrder,
				totalPrice: updatedTotalPrice,
				items: [...updatedItems]
			});
		}
		else {
			const totalPrice = ((item.quantity || 1) * item.price);
			const newOrder = {
				date: new Date(),
				restaurantId: this.props.restaurants.currentRestaurant._id,
				restaurantName: this.props.restaurants.currentRestaurant.name,
				totalPrice,
				items: [item],
				status: 'iniciada'
			};
			this.props.createOrder(newOrder)
			// this.props.setCurrentOrder(currentOrder);

		}
	}

	menuItemsMap = () => {
		if (this.props.restaurants.currentRestaurant && this.props.restaurants.currentRestaurant.menu) {
			return this.props.restaurants.currentRestaurant.menu.map(item => (
				<RestaurantMenuItem handleAddOrderItem={this.handleAddOrderItem} item={item} key={item._id} />
			));
		}
		return (
			<p>Sem restaurante</p>
		);
	}

	constructor(props: IProps) {
		super(props);
		this.handleSetCurrentRestaurant();
		
	}


	render() {
		 return this.props.restaurants.currentRestaurant ? (
			<div className={style.detailContainer}>
				<h1 className="text-center">
					{this.props.restaurants.currentRestaurant.name}
				</h1>
				{this.menuItemsMap()}
			</div>
		) : null;
	}
}

interface mappedState {
	restaurants: {
		list: Array<any>,
		currentRestaurant: {
			_id: String,
			name: String,
			menu: Array<MenuItem>
		}
	},
	firebase: {
		auth: {
			uid: string
		}
	}
	orders: {
		currentOrder: {
			items: Array<any>,
			totalPrice: Number,
			restaurantId: String,
			status: String
		}
	},
}

const mapStateToProps = (state: mappedState) => ({ restaurants: state.restaurants, firebase: state.firebase, orders: state.orders });

export default connect(mapStateToProps, {
	setRestaurant,
	setCurrentOrder,
	updateCurrentOrder,
	createOrder
})(RestaurantMenu);