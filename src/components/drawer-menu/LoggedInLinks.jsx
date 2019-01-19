import React from 'react';
import { Link } from 'preact-router/match';

import style from './style';

export default function LoggedInLinks(props) {

	const hasOpenOrder=props.openOrder&&props.openOrder.id&&props.openOrder.items.length?
		(
			<li>
				<Link href={`/pedidos/${props.openOrder.id}`}>
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
}
