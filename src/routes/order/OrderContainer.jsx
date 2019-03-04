import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { setOrderHistory } from '../../store/actions/orders';

// import OrderDetails from './order-details/OrderDetails.jsx';
import OrdersList from './orders-list/OrdersList.jsx';


class OrderContainer extends Component {

	state={
		loading: false
	}

	fetchOrders=() => {
		this.setState({ loading: true});
		const orders=[
			{
				id: 1,
				date: new Date(),
				totalPrice: 159.99,
				items: [],
				restaurantId: '',
				restaurantName: 'Manhattan',
				status: 'finalizada'
			},
			{
				id: 2,
				date: new Date(),
				totalPrice: 89.99,
				items: [],
				restaurantId: '',
				restaurantName: 'McDonalds',
				status: 'finalizada'
			},
			{
				id: 3,
				date: new Date(),
				totalPrice: 1099.99,
				items: [],
				restaurantId: '',
				restaurantName: 'McDonalds',
				status: 'finalizada'
			}
		];
		this.props.setOrderHistory(orders);
		this.setState({ loading: false});
	}

	constructor(...args) {
		super(...args);
		console.log('orderContainer props: ', this.props);
		if (!this.props.firebase.auth.uid) {
			this.props.history.push('/');
		}

		this.fetchOrders();
	}


	render() {
		return this.state.loading ? null : (
			<Switch>
				<Route path="/pedidos/" exact component={() => <OrdersList orders={this.props.orders.list} />} />
				{/* <Route path="/pedidos/:id" component={OrderDetails} /> */}
			</Switch>
		);
	}
};

const mapStateToProps=(state) => ({ firebase: state.firebase, orders: state.orders })

export default connect(mapStateToProps, {
	setOrderHistory
})(OrderContainer);
