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
import Loading from './components/Loading';

// actions
import { fetchOrders } from './store/actions/orders';
import { fetchRestaurants } from './store/actions/restaurants';
import { fetchProfile } from './store/actions/auth';

class App extends Component {

	state={
		loading: true
	}

	initializeApp=() => {
		Promise.all([this.props.fetchOrders(), this.props.fetchRestaurants(), this.props.fetchProfile()])
			.then((res) => {
				this.setState({ loading: false })
			})
			.catch((error) => {
				console.error('Error initializing App::', error)
			})
	}

	constructor(args) {
		super(args);
		this.initializeApp();
	}

	render() {
		
		return this.state.loading ? (<Loading />) : (
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

const mapStateToProps=(state) => ({ firebase: state.firebase })

export default connect(mapStateToProps, { fetchOrders, fetchRestaurants, fetchProfile })(App);