import React from 'react';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux';

import style from './style';

const LoggedInLinks=connect(state => state)((props) => {
	const hasOpenOrder=props.orders.currentOrder.status==='iniciada'?
		(
			<li>
				<Link href={`/pedidos/${props.orders.currentOrder.id}`}>
					<i class="icon-bell" /> Acompanhar pedido
				</Link>
			</li>
		):null;

	return (
		<ul class={style.drawerContent} >
			<li>
				<Link href="/">
					<i class="icon-home1" /> Inicio
				</Link>
			</li>
			{hasOpenOrder}
			<li>
				<Link href="/pedidos">
					<i class="icon-list-alt" /> Histórico de pedidos
				</Link>
			</li>
			<li>
				<Link href="/perfil">
					<i class="icon-user-circle-o" /> Perfil
				</Link>
			</li>
			<li>
				<Link href="/ajuda">
					<i class="icon-question-circle" /> Como pedir
				</Link>
			</li>
			<li>
				<button class={style.LogoutBtn} type="button" onClick={props.handleSignOut}>
					<i class="icon-exit" /> Sair
				</button>
			</li>
		</ul>
	);
});

export default LoggedInLinks;