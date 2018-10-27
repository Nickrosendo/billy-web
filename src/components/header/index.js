import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = (props) => (
	<header class={style.header}>
		<Link class={style.backBtn} href="/restaurantes">
			<i class="icon-arrow-left" />
		</Link>
		<Link class={style.headerIcon} href="/">
			<img class={style.headerImg} src={require('../../assets/images/billy-icon.png')} />
			<span> Billy </span>
		</Link>
		<button class={style.menuBtn} onClick={props.onOpenDrawer}>
			<i class="icon-menu" />
		</button>
	</header>
);


export default Header;
