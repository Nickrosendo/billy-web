import { h } from 'preact';
import style from './style';

const DrawerMenu = (props) => (
	<nav class={style.drawerMenu}>
		<ul class={style.drawerContent} >
			<li> <i class="icon-home" /> Inicio</li>
			<li> <i class="icon-profile-icon" /> Perfil</li>
			<li> <i class="icon-spoon-knife" /> Como pedir</li>
			<li> <i class="icon-qrcode" /> Histórico de compras</li>
			<li> <i class="icon-exit" /> Sair</li>
		</ul>
		<div class={style.drawerBackdrop} onClick={props.closeDrawer} />
	</nav>
);

export default DrawerMenu;