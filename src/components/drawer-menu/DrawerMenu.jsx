import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style';

const DrawerMenu=(props) => (
	<nav class={style.drawerMenu}>
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
				<Link href="/">
					<i class="icon-user-circle-o" /> Perfil
				</Link>
			</li>
			<li>
				<Link href="/">
					<i class="icon-question-circle" /> Como pedir
				</Link>
			</li>
			<li>
				<Link href="/">
					<i class="icon-list-alt" /> Histórico de compras
				</Link>
			</li>
			<li>
				<Link href="/">
					<i class="icon-exit" /> Sair
				</Link>
			</li>
		</ul>
		<div class={style.drawerBackdrop} onClick={props.closeDrawer} />
	</nav>
);

export default DrawerMenu;