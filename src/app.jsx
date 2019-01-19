import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider, connect } from 'preact-redux';
import axios from 'axios';

import store from './store';
import reducer from './store/reducers';
import * as actions from './store/actions';

import Header from './components/header/Header.jsx';
import DrawerMenu from './components/drawer-menu/DrawerMenu.jsx';

// Code-splitting is automated for routes
import LoginContainer from './routes/login/LoginContainer.jsx';
import SignUpContainer from './routes/signup/SignUpContainer.jsx';
import RestaurantsContainer from './routes/restaurants/RestaurantContainer.jsx';
import OrderContainer from './routes/order/OrderContainer.jsx';
import ProfileContainer from './routes/profile/ProfileContainer.jsx';
import HelpContainer from './routes/help/HelpContainer.jsx';

@connect(reducer, actions)
class App extends Component {

	handleReturnRoute(routeEvent) {
		if (routeEvent.url==='/') {
			return '';
		}
		else if (routeEvent.url.split('/restaurantes').length===2&&routeEvent.url.split('/restaurantes')[1]!=='') {
			return '/';
		}
		else if (routeEvent.url.indexOf('pedidos')!==-1&&this.props.order&&this.props.order.order.restaurantId) {
			return `/restaurantes/${this.props.order.order.restaurantId}`;
		}
		return routeEvent.previous;
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute=e => {
		// this.props.testThunk('teste Thunk value');
		this.props.setPreviousRoute(this.handleReturnRoute(e));
		if (this.props.ui.drawerOpen) {
			this.props.closeDrawer();
		}
	};

	fetchRestaurants() {
		axios.get('https://us-central1-billy-web.cloudfunctions.net/funcApp/api/restaurants')
			// axios.get('http://192.168.0.111:4000/api/restaurants')
			.then(({ data }) => {
				this.props.setRestaurants(data);
			});
	}

	fetchOrders() {
		const orders=[
			{
				id: 1,
				date: new Date(),
				totalPrice: 159.99,
				items: [],
				restaurantId: ''
			},
			{
				id: 2,
				date: new Date(),
				totalPrice: 89.99,
				items: [],
				restaurantId: ''
			},
			{
				id: 3,
				date: new Date(),
				totalPrice: 1099.99,
				items: [],
				restaurantId: ''
			}
		];
		this.props.setOrders(orders);
	}

	componentDidMount() {
		this.fetchRestaurants();
		this.fetchOrders();
	}

	render() {
		return (
			<div id="app">
				<Header />
				<DrawerMenu />
				<main class="route-container">
					<Router onChange={this.handleRoute}>
						<RestaurantsContainer path="/" />
						<RestaurantsContainer path="/restaurantes/:id?" />
						<LoginContainer path="/login" />
						<SignUpContainer path="/cadastrar" />
						<OrderContainer path="/pedidos/:id?" />
						<ProfileContainer path="/perfil" />
						<HelpContainer path="/ajuda" />
					</Router>
				</main>
			</div>
		);
	}
}

const exportedApp=() => (
	<Provider store={store} >
		<App />
	</Provider>
);

export default exportedApp;