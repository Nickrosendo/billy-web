import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import axios from 'axios';

// route components
import RestaurantsList from './routes/restaurants/restaurants-list/RestaurantsList';

// ui components
import Header from './components/Header';
import DrawerMenu from './components/drawer-menu/DrawerMenu';

class App extends Component {

	state = {
		restaurants: [],
		drawerOpen: false
	}

	toggleDrawer = () => {
		this.setState({
			drawerOpen: !this.state.drawerOpen,
		});
	};

	fetchRestaurants = () => {
		if (!this.state.restaurants.length) {
			axios.get('https://us-central1-billy-web.cloudfunctions.net/funcApp/api/restaurants')
				// axios.get('http://192.168.0.111:4000/api/restaurants')
				.then(({ data }) => {
					this.setState({ restaurants: data });
				});
		}
	}

	componentWillMount() {
		this.fetchRestaurants();
	}

	render() {
		return (
			<div id="app">
				<Header toggleDrawer={this.toggleDrawer.bind(this)} />
				<DrawerMenu open={this.state.drawerOpen} toggleDrawer={this.toggleDrawer} />
				<main className="route-container">
					<RestaurantsList restaurants={this.state.restaurants} />
					{/* <Router>
						<Route path="/" exact component={RestaurantsList} />}/>
						<Route path="/restaurantes" component={<RestaurantsList restaurants={this.state.restaurants} />}/>
					</Router>					 */}
				</main>
			</div>
		);
	}
}

export default App;