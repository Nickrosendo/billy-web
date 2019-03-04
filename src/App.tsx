import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

// route components
import RestaurantContainer from './routes/restaurants/RestaurantContainer';
import OrderContainer from './routes/order/OrderContainer.jsx';
import LoginContainer from './routes/login/LoginContainer.jsx';


// ui components
import Header from './components/Header';
import DrawerMenu from './components/drawer-menu/DrawerMenu';
import OrderLabel from './components/order-label/OrderLabel.jsx';

class App extends Component {

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
					<main className="route-container">

						<div>
							<Route path="/" component={RestaurantContainer} />
							<Route path="/pedidos" component={OrderContainer} />
							<Route path="/login" component={LoginContainer} />
						</div>
						<OrderLabel />
					</main>
				</div>
			</Router>
		);
	}
}

export default App;