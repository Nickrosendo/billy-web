import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import OrderDetails from './order-details/OrderDetails.jsx';
import OrdersList from './orders-list/OrdersList.jsx';


class OrderContainer extends Component {

	render() {
		return (
				<Switch>
					{
						this.props.orders.history.length?
							(
								<Route path="/pedidos/" exact component={() => <OrdersList orders={this.props.orders.history} />} />
							):null
					}
					<Route path="/pedidos/:id" component={OrderDetails} />
				</Switch>
			);
	}
};

const mapStateToProps=(state) => ({ firebase: state.firebase, orders: state.orders })

export default connect(mapStateToProps)(OrderContainer);
