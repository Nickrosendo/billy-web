import React, { Component } from 'react';

import style from './style.css';

export default class LoginContainer extends Component {

	state = {
		email: '',
		password: ''
	}

	render() {
		return (
			<div>
				<div class={style.logoContainer}>
					<img class={style.logoImg} src={require('../../assets/images/billy-pizza.png')} />
					<span> Billy </span>
				</div>
				<form class="text-center">
					<input class={style.input} type="text" placeholder="Email" value={this.state.email} />
					<input class={style.input} type="password" placeholder="Senha" value={this.state.password} />
					<input class={style.btn} type="submit" value="Entrar" />
				</form>
			</div>
		);
	}
}
