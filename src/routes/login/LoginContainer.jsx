import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn } from '../../store/actions';
import style from './LoginContainer.module.css';

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

	handleSignup=() => {
		this.props.history.push('/cadastro');
	}

	handleEmail(event) {
		const email=event.target.value;
		if (email) {
			this.setState({ email });
		} else {
			this.setState({ email: '' });
		}
	}

	handlePassword(event) {
		const password=event.target.value;
		if (password) {
			this.setState({ password });
		} else {
			this.setState({ password: '' });
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
			this.props.history.push('/');
		}
		return (
			<div>
				<div className={style.logoContainer}>
					<img className={style.logoImg} src={require('../../assets/images/billy-pizza.png')} alt={'Billy-Logo'} />
					<span> Billy </span>
				</div>
				<form className="text-center">
					<input className={style.input} type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail} autoComplete={'email'} />
					<input className={style.input} type="password" placeholder="Senha" value={this.state.password} onChange={this.handlePassword} autoComplete={'password'} />
					<input className={style.btn} type="submit" value="Entrar" onClick={this.handleSignin} />
					<input className={style.btn} type="button" value="Cadastrar" onClick={this.handleSignup} />
					{
						this.props.auth.loginError? (
							<div className={style.authErrorContainer}>
								<span className={style.authError}>
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

const mapStateToProps=(state) => ({ firebase: state.firebase, auth: state.auth });

export default connect(mapStateToProps, {
	signIn,
})(LoginContainer);