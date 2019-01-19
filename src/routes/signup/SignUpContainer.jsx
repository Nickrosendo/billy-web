import React, { Component } from 'react';
import { connect } from 'preact-redux';
import { route } from 'preact-router';

import { signUp } from '../../store/actions';
import state from '../../store/reducers';
import style from './style.css';

@connect(state, { signUp })
class SignUp extends Component {

	state={
		email: '',
		password: '',
		firstName: '',
		lastName: ''
	}

	handleSignup(event) {
		event.preventDefault();
		const newUser={
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			password: this.state.password
		};
		this.props.signUp(newUser);
	}

	handleEmail(event) {
		const email=event.target.value;
		if (email) {
			this.setState({ email });
		}
	}

	handleFirstName= (event) => {
		const firstName=event.target.value;
		if (firstName) {
			this.setState({ firstName });
		}
	}

	handleLastName= (event) => {
		const lastName=event.target.value;
		if (lastName) {
			this.setState({ lastName });
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
		this.handleSignup=this.handleSignup.bind(this);
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
					<div class={style.inputGroup}>
						<input class={style.inputFirstName} type="text" placeholder="Nome" value={this.state.firstName} onChange={this.handleFirstName} />
						<input class={style.inputLastName} type="text" placeholder="Sobrenome" value={this.state.lastName} onChange={this.handleLastName} />
					</div>
					<input class={style.input} type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
					<input class={style.input} type="password" placeholder="Senha" value={this.state.password} onChange={this.handlePassword} />
					<input class={style.btn} type="submit" value="Cadastrar" onClick={this.handleSignup} />
					{
						this.props.auth.signUpError? (
							<div class={style.authErrorContainer}>
								<span class={style.authError}>
									{this.props.auth.signUpError}
								</span>
							</div>
						):null

					}
				</form>
			</div>
		);
	}
}

export default SignUp;