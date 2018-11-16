import { h } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux';

import style from './style';

const Header = connect(state => state)((props) => {
	let hasBack = props.previousRoute ? (
		<Link class={style.backBtn} href={props.previousRoute}>
			{props.previousRoute === '/' || props.previousRoute === '/restaurantes' ? (
				<i class="icon-home" style="vertical-align: middle; " />
			) : (
				<i class="icon-arrow-left" style="vertical-align: middle; " />
			)
			}
			<span stye="text-transform: capitalize;">  {props.previousRoute.split('/restaurantes')[1] ? 'Cardapio' : ''}</span>
		</Link>
	) : null;

	return (
		<header class={style.header}>
			{
				hasBack
			}
			<button class={style.menuBtn} onClick={props.onOpenDrawer}>
				<i class="icon-menu" />
			</button>
		</header>
	);
});


export default Header;
