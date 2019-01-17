import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import style from './style';
import reduce from '../../redux/reducers/root';
import * as actions from '../../redux/actions';

@connect(reduce, actions)
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