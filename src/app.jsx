import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';

import store from './store';

import Header from './components/header';
import DrawerMenu from './components/drawer-menu';

// Code-splitting is automated for routes
import Restaurants from './routes/restaurants/RestaurantContainer.jsx';
import OrderDetails from './routes/order/OrderContainer.jsx';

class App extends Component {

	state = {
		drawerOpen: false,
		isNested: null
	}

	hanldeOpenDrawer = () => {
		this.setState({ drawerOpen: true });
	}

	handlecloseDrawer = () => {
		this.setState({ drawerOpen: false });
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		if (e.url.split('/').length === 3) {
			this.setState({ isNested: true });
		}
		else {
			this.setState({ isNested: false });
		}
	};

	render() {
		const drawer = this.state.drawerOpen ? <DrawerMenu closeDrawer={this.handlecloseDrawer} /> : null;
		return (
			<div id="app">
				<Header onOpenDrawer={this.hanldeOpenDrawer} isNested={this.state.isNested} />
				{drawer}
				<main class="route-container">
					<Router onChange={this.handleRoute}>
						<Restaurants path="/" />
						<Restaurants path="/restaurantes/:id?" />
						<OrderDetails path="/pedidos/:id?" />
					</Router>
				</main>
			</div>
		);
	}
}

const exportedApp = () => (
	<Provider store={store} >
		<App />
	</Provider>
);

export default exportedApp;