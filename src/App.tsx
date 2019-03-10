import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import { connect } from 'react-redux';


// route components
import RestaurantContainer from './routes/restaurants/RestaurantContainer';
import OrderContainer from './routes/order/OrderContainer.jsx';
import LoginContainer from './routes/login/LoginContainer.jsx';


// ui components
import Header from './components/Header';
import DrawerMenu from './components/drawer-menu/DrawerMenu';

interface Order {
	id: String,
	startDate: Date,
	totalPrice: Number,
	items: Array<any>,
	restaurantId: String,
	status: String
}

interface IProps {
	orders: {
		history: Array<Order>,
		currentOrder: Order
	}
}

class App extends Component<IProps> {

	state = {
		drawerOpen: false
	}

	toggleDrawer = () => {
		this.setState({
			drawerOpen: !this.state.drawerOpen,
		});
	};

	render() {
		return (
			<Router>
				<div id="app">

					<Header toggleDrawer={this.toggleDrawer.bind(this)} />
					<DrawerMenu open={this.state.drawerOpen} toggleDrawer={this.toggleDrawer} />
					<main className="route-container" style={this.props.orders.currentOrder && this.props.orders.currentOrder.items && this.props.orders.currentOrder.items.length>0? {paddingBottom: 66 }:{}}>

						<div>
							<Route path="/restaurantes" component={RestaurantContainer} />
							<Route path="/pedidos" component={OrderContainer} />
							<Route path="/login" component={LoginContainer} />
						</div>
					</main>
				</div>
			</Router>
		);
	}
}

interface mappedState {
	orders: {
		history: Array<Order>,
		currentOrder: Order
	}
}

const mapStateToProps = (state: mappedState) => ({ orders: state.orders })

export default connect(mapStateToProps)(App);