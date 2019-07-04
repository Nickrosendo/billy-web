import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signUp } from '../../store/actions';
import style from './SignUpContainer.module.css';

class SignUpContainer extends Component {

	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: ''
	}

	handleSignup(event) {
		event.preventDefault();
		const newUser = {
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			password: this.state.password
		};
		this.props.signUp(newUser);
	}

	handleSignin = () => (
		<Redirect to={'/login'}/>
	)

	handleEmail(event) {
		const email = event.target.value;
		if (email) {
			this.setState({ email });
		}
	}

	handleFirstName = (event) => {
		const firstName = event.target.value;
		if (firstName) {
			this.setState({ firstName });
		}
	}

	handleLastName = (event) => {
		const lastName = event.target.value;
		if (lastName) {
			this.setState({ lastName });
		}
	}

	handlePassword(event) {
		const password = event.target.value;
		if (password) {
			this.setState({ password });
		}
	}

	constructor(...args) {
		super(...args);
		this.handleSignup = this.handleSignup.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
	}

	render() {
		if (this.props.firebase.auth.uid) {
			return (
				<Redirect to={'/restaurantes'} />
			)
		}
		return (
			<div>
				<div className={style.logoContainer}>
					<img className={style.logoImg} alt={'Billy-logo'} src={require('../../assets/images/billy-pizza.png')} />
					<span> Billy </span>
				</div>
				<form className="text-center">
					<div className={style.inputGroup}>
						<input className={style.inputFirstName} type="text" placeholder="Nome" value={this.state.firstName} onChange={this.handleFirstName} />
						<input className={style.inputLastName} type="text" placeholder="Sobrenome" value={this.state.lastName} onChange={this.handleLastName} />
					</div>
					<input className={style.input} type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
					<input className={style.input} type="password" placeholder="Senha" value={this.state.password} onChange={this.handlePassword} />
					<input className={style.btn} type="submit" value="Cadastrar" onClick={this.handleSignup} />
					<input className={style.btn} type="button" value="Entrar" onClick={this.handleSignin} />
					{
						this.props.auth.signUpError ? (
							<div className={style.authErrorContainer}>
								<span className={style.authError}>
									{this.props.auth.signUpError}
								</span>
							</div>
						) : null

					}
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ firebase: state.firebase, auth: state.auth })

export default connect(mapStateToProps, {
	signUp
})(SignUpContainer);