import { h } from 'preact';
import style from './style';

const DrawerMenu = (props) => (
	<nav class={style.drawerMenu}>
		<ul class={style.drawerContent} >
			<li> <i class="icon-home1" /> Inicio</li>
			<li> <i class="icon-user-circle-o" /> Perfil</li>
			<li> <i class="icon-question-circle" /> Como pedir</li>
			<li> <i class="icon-list-alt" /> Histórico de compras</li>
			<li> <i class="icon-exit" /> Sair</li>
		</ul>
		<div class={style.drawerBackdrop} onClick={props.closeDrawer} />
	</nav>
);

export default DrawerMenu;