import React, { Component } from 'react';

import { connect } from 'react-redux';

class ProfileContainer extends Component {

	state = {
		user: {
			name: ''
		}
	}

	componentDidMount() {
		this.setState({
			user: {
				name: 'Nicolas Oliveira Rosendo'
			}
		});
	}

	render() {
		console.log('Firebase: ', this.props.firebase);
		return (
			<div>
				<h1>Perfil</h1>
				<p>
					{this.state.user.name}
				</p>
				<p>
					{this.props.firebase.auth.email}
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) =>  ({ firebase: state.firebase })

export default connect(mapStateToProps)(ProfileContainer);