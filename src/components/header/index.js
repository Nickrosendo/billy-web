import { h } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux';

import style from './style';

const Header = connect(state => state)((props) => {
	let hasBack;
	if (props.order.items.length > 0 && window.location.pathname.indexOf('/restaurantes') === -1) {
		hasBack = (
			<Link class={style.backBtn} href={`/restaurantes/${props.order.restaurantId}`}>
				<i class="icon-arrow-left" />
			</Link>
		);
	}
	else if (window.location.pathname.indexOf('/restaurantes') !== -1 && window.location.pathname.split('/restaurantes/').length === 2) {
		hasBack = (
			<Link class={style.backBtn} href={`/restaurantes/`}>
				<i class="icon-arrow-left" />
			</Link>
		);
	}
	return (
		<header class={style.header}>
			{
				hasBack
			}
			<Link class={style.headerIcon} href="/">
				<img class={style.headerImg} src={require('../../assets/images/billy-icon.png')} />
				<span> Billy </span>
			</Link>
			<button class={style.menuBtn} onClick={props.onOpenDrawer}>
				<i class="icon-menu" />
			</button>
		</header>
	);
});


export default Header;
