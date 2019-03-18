import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

// route utils
import PrivateRoute from './components/route-utils/PrivateRoute.jsx';

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

// actions
import { fetchOrders } from './store/actions/orders';
import { fetchRestaurants } from './store/actions/restaurants';

interface IProps {
	firebase: {
		auth: {
			isLoaded: Boolean
		}
	},
	fetchOrders: Function,
	fetchRestaurants: Function
}

class App extends Component<IProps> {

	state = {
		loading: false
	}

	initializeApp = () => {
		Promise.all([this.props.fetchOrders(), this.props.fetchRestaurants()])
			.then(() => this.setState({ loading: false }))
			.catch((error) => {
				console.error('Error initializing App::', error)
			})
	}

	constructor(args: any) {
		super(args);
		this.initializeApp();
	}

	render() {

		// only start app when firebase auth is Loaded
		if (!this.props.firebase.auth.isLoaded) {
			return false
		}

		return this.state.loading ? (<p>Inicializando...</p>) : (
			<div id="app">
				<Router>
					<div>
						<Header />
						<DrawerMenu />
						<main className="route-container" >
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

interface mappedStoreState {
	firebase: {
		auth: {
			isLoaded: Boolean
		}
	}
}

const mapStateToProps = (state: mappedStoreState) => ({ firebase: state.firebase })

export default connect(mapStateToProps, { fetchOrders, fetchRestaurants })(App);