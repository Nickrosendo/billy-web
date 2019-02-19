import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

// route components
import RestaurantContainer from './routes/restaurants/RestaurantContainer';


// ui components
import Header from './components/Header';
import DrawerMenu from './components/drawer-menu/DrawerMenu';

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
			<div id="app">
				<Header toggleDrawer={this.toggleDrawer.bind(this)} />
				<DrawerMenu open={this.state.drawerOpen} toggleDrawer={this.toggleDrawer} />
				<main className="route-container">
					<Router>
						<div>
							<Route path="/" exact component={RestaurantContainer} />
							<Route path="/restaurantes" component={RestaurantContainer}/>
						</div>
					</Router>
				</main>
			</div>
		);
	}
}

export default App;