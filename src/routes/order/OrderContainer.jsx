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
		if (this.props.orders&&this.props.orders.history.length) {
			return false;
		}
		this.setState({ loading: true });
		new Promise((resolve) => {
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
			setTimeout(() => resolve(orders), 3000);
		}).then(orders => {
			this.props.setOrderHistory([...orders]);
			this.setState({ loading: false });
		})
	}

	componentDidMount() {
		this.fetchOrders();
	}

	render() {
		return this.state.loading? (
			<p>Carregando pedidos...</p>
		):(
				<Switch>
					{
						this.props.orders.history.length?
							(
								<Route path="/pedidos/" exact component={() => <OrdersList orders={this.props.orders.history} />} />
							):null
					}
					{/* <Route path="/pedidos/:id" component={OrderDetails} /> */}
				</Switch>
			);
	}
};

const mapStateToProps=(state) => ({ firebase: state.firebase, orders: state.orders })

export default connect(mapStateToProps, {
	setOrderHistory
})(OrderContainer);
