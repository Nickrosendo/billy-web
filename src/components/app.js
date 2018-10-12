import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import DrawerMenu from './drawer-menu';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Restaurants from '../routes/restaurants';

export default class App extends Component {
	
	state = {
		drawerOpen: false
	}

	hanldeOpenDrawer = () => {
		this.setState( { drawerOpen: true } );
	}

	handlecloseDrawer = () => {
		this.setState( { drawerOpen: false } );
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		const drawer = this.state.drawerOpen ? <DrawerMenu closeDrawer={this.handlecloseDrawer} /> : null;
		return (
			<div id="app">
				<Header onOpenDrawer={this.hanldeOpenDrawer} />
				{drawer}
				<Router onChange={this.handleRoute}>
					<Restaurants path="/" />
					<Restaurants path="/restaurantes" />
				</Router>
			</div>
		);
	}
}