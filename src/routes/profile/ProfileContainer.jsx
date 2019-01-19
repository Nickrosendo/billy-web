import { h, Component } from 'preact';
import { route } from 'preact-router';

import { connect } from 'preact-redux';

// import style from './style';
import state from '../../store/reducers';
import * as actions from '../../store/actions';

@connect(state, actions)
class ProfileContainer extends Component {

	state={
		user: {
			name: ''
		}
	}

	constructor(...args) {
		super(...args);
		this.setState({
			user: {
				name: 'Nicolas Oliveira Rosendo'
			}
		});
	}

	render() {
		if (!this.props.firebase.auth.uid) {
			return route('/', true);
		}
		return (
			<div>
				<h1>Perfil</h1>
				<p>
					{this.state.user.name}
				</p>
			</div>
		);
	}
}

export default ProfileContainer;