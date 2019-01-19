import React from 'react';
import { Link } from 'preact-router/match';

import style from './style';

export default function LoggedOutLinks() {
	return (
		<ul class={style.drawerContent} >
			<li>
				<Link href="/">
					<i class="icon-home1" /> Inicio
				</Link>
			</li>
			<li>
				<Link href="/ajuda">
					<i class="icon-question-circle" /> Como pedir
				</Link>
			</li>
			<li>
				<Link href="/cadastrar">
					<i class="icon-user-circle-o" /> Cadastrar
				</Link>
			</li>
			<li>
				<Link href="/login">
					<i class="icon-enter" /> Entrar
				</Link>
			</li>
		</ul>
	);
}
