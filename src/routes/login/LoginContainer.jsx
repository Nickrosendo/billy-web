import React, { Component } from 'react';
import { connect } from 'preact-redux';

import * as actions from '../../store/actions';
import style from './style.css';

@connect(null, actions)
class LoginContainer extends Component {

	state = {
		email: '',
		password: ''
	}

	handleSignin(event) {
		event.preventDefault();
		const credentials = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.signIn(credentials);
	}

	handleEmail(event) {
		const email=event.target.value;
		if (email) {
			this.setState({ email });
		}
	}

	handlePassword(event) {
		const password=event.target.value;
		if (password) {
			this.setState({ password });
		}
	}

	constructor(...args) {
		super(...args);
		this.handleSignin = this.handleSignin.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
	}

	render() {
		return (
			<div>
				<div class={style.logoContainer}>
					<img class={style.logoImg} src={require('../../assets/images/billy-pizza.png')} />
					<span> Billy </span>
				</div>
				<form class="text-center">
					<input class={style.input} type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
					<input class={style.input} type="password" placeholder="Senha" value={this.state.password} onChange={this.handlePassword} />
					<input class={style.btn} type="submit" value="Entrar" onClick={this.handleSignin} />
				</form>
			</div>
		);
	}
}

export default LoginContainer;