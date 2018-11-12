import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider, connect } from 'preact-redux';

import store from './store';
import reduce from './reducers';
import * as actions from './actions';

import Header from './components/header';
import DrawerMenu from './components/drawer-menu';

// Code-splitting is automated for routes
import Restaurants from './routes/restaurants/RestaurantContainer.jsx';
import OrderDetails from './routes/order/OrderContainer.jsx';

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

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		console.log('route Event: ', e);
		console.log('app props: ', this.props);
		this.currentUrl = e.url;
		const hasPrevious = e.previous ? e.previous : '';
		this.props.setPreviousRoute(hasPrevious);
		
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