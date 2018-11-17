import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider, connect } from 'preact-redux';

import store from './store';
import reduce from './reducers';
import * as actions from './actions';

import Header from './components/header/Header';
import DrawerMenu from './components/drawer-menu';

// Code-splitting is automated for routes
import Restaurants from './routes/restaurants/RestaurantContainer.jsx';
import OrderContainer from './routes/order/OrderContainer.jsx';

@connect(reduce, actions)
class App extends Component {

	state = {
		drawerOpen: false,
		isNested: null
	}

	handleOpenDrawer = () => {
		this.setState({ drawerOpen: true });
	}

	handlecloseDrawer = () => {
		this.setState({ drawerOpen: false });
	}

	handleReturnRoute(routeEvent) {
		if (routeEvent.url === '/') {
			return '';
		}
		else if (routeEvent.url.split('/restaurantes').length === 2 && routeEvent.url.split('/restaurantes')[1] !== '') {
			return '/';
		}
		else if (routeEvent.url.indexOf('pedidos') !== -1 && this.props.order && this.props.order.restaurantId) {
			return `/restaurantes/${this.props.order.restaurantId}`;
		}
		return routeEvent.previous;
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		this.props.setPreviousRoute(this.handleReturnRoute(e));
	};

	render() {
		const drawer = this.state.drawerOpen ? <DrawerMenu closeDrawer={this.handlecloseDrawer} /> : null;
		return (
			<div id="app">
				<Header onOpenDrawer={this.handleOpenDrawer} />
				{drawer}
				<main class="route-container">
					<Router onChange={this.handleRoute}>
						<Restaurants path="/" />
						<Restaurants path="/restaurantes/:id?" />
						<OrderContainer path="/pedidos/:id?" />
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