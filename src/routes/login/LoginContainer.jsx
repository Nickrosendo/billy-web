import React, { Component } from 'react';
import { connect } from 'preact-redux';
import { route } from 'preact-router';

import { signIn } from '../../store/actions';
import state from '../../store/reducers';
import style from './style.css';

@connect(state, { signIn })
class LoginContainer extends Component {

	state={
		email: '',
		password: ''
	}

	handleSignin(event) {
		event.preventDefault();
		const credentials={
			email: this.state.email,
			password: this.state.password
		};
		this.props.signIn(credentials);
	}

	handleSignup= () => {
		route('/cadastro', true);
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
		this.handleSignin=this.handleSignin.bind(this);
		this.handleEmail=this.handleEmail.bind(this);
		this.handlePassword=this.handlePassword.bind(this);
	}

	render() {
		if (this.props.firebase.auth.uid) {
			return route('/', true);
		}
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
					<input class={style.btn} type="button" value="Cadastrar" onClick={this.handleSignup} />
					{
						this.props.auth.loginError? (
							<div class={style.authErrorContainer}>
								<span class={style.authError}>
									{this.props.auth.loginError}
								</span>
							</div>
						):null

					}
				</form>
			</div>
		);
	}
}

export default LoginContainer;