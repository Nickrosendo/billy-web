import React, { Component } from 'react';
import { route } from 'preact-router';
import { connect } from 'preact-redux';

import style from './style';
import state from '../../store/reducers';
import { closeDrawer, signOut } from '../../store/actions';

import LoggedInLinks from './LoggedInLinks.jsx';
import LoggedOutLinks from './LoggedOutLinks.jsx';

@connect(state, { closeDrawer, signOut })
class DrawerMenu extends Component {

	handleSignOut=() => {
		this.props.signOut();
		route('/');
	}

	render() {
		const links=this.props.firebase.auth.uid? <LoggedInLinks handleSignOut={this.handleSignOut} />:<LoggedOutLinks />;
		const drawer=this.props.ui.drawerOpen? (
			<nav class={style.drawerMenu}>
				<div class={style.drawerBackdrop} onClick={this.props.closeDrawer} />
				{links}
			</nav>
		):null;
		return drawer;
	}
}

export default DrawerMenu;
