import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style';

const DrawerMenu=(props) => (
	<nav class={style.drawerMenu}>
		<div class={style.drawerBackdrop} onClick={props.closeDrawer} />
		<ul class={style.drawerContent} >
			<li>
				<Link href="/">
					<i class="icon-home1" /> Inicio
				</Link>
			</li>
			{
				props.order&&props.order.id&&props.order.items.length?
					(
						<li>
							<Link href={`/pedidos/${props.order.id}`}>
								<i class="icon-bell" /> Acompanhar pedido
							</Link>
						</li>
					):null
			}
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
			{
				props.auth? (
					<li>
						<Link href="/">
							<i class="icon-exit" /> Sair
						</Link>
					</li>
				):(
					<li>
						<Link href="/login">
							<i class="icon-enter" /> Entrar
						</Link>
					</li>
				)
			}
		</ul>
	</nav>
);

export default DrawerMenu;