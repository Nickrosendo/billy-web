import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';


// route components
import RestaurantContainer from './routes/restaurants/RestaurantContainer';
import OrderContainer from './routes/order/OrderContainer.jsx';
import LoginContainer from './routes/login/LoginContainer.jsx';
import SignUpContainer from './routes/signup/SignUpContainer.jsx';
import ProfileContainer from './routes/profile/ProfileContainer.jsx';
import HelpContainer from './routes/help/HelpContainer.jsx';
import SecurityContainer from './routes/security/SecurityContainer.jsx';


// ui components
import Header from './components/Header';
import DrawerMenu from './components/drawer-menu/DrawerMenu';

// route utils
import PrivateRoute from './components/route-utils/PrivateRoute.jsx';


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
	},
	firebase: {
		auth: {
			isLoaded: Boolean
		}
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
	
		if (!this.props.firebase.auth.isLoaded) {
			return false
		}

		return (
			<div id="app">
				<Router>
					<div>
						<Header toggleDrawer={this.toggleDrawer.bind(this)} />
						<DrawerMenu open={this.state.drawerOpen} toggleDrawer={this.toggleDrawer} />
						<main className="route-container" style={this.props.orders.currentOrder && this.props.orders.currentOrder.items && this.props.orders.currentOrder.items.length > 0 ? { paddingBottom: 66 } : {}}>
							<Switch>
								<Route path="/restaurantes" component={RestaurantContainer} />
								<Route path="/login" component={LoginContainer} />
								<Route path="/cadastro" component={SignUpContainer} />
								<Route path="/ajuda" component={HelpContainer} />
								<PrivateRoute path="/pedidos" component={OrderContainer} />
								<PrivateRoute path="/perfil" component={ProfileContainer} />
								<PrivateRoute path="/seguranca" component={SecurityContainer} />
								<Redirect from="/" to="/restaurantes" />
							</Switch>
						</main>
					</div>
				</Router>
			</div>
		);
	}
}

interface mappedState {
	orders: {
		history: Array<Order>,
		currentOrder: Order
	},
	firebase: {
		auth: {
			isLoaded: Boolean
		}
	}
}

const mapStateToProps = (state: mappedState) => ({ orders: state.orders, firebase: state.firebase })

export default connect(mapStateToProps)(App);