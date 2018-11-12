import { h } from 'preact';
import { Link, Match } from 'preact-router/match';
import { connect } from 'preact-redux';

import style from './style';

const Header = connect(state => state)((props) => {
	let hasBack = props.previousRoute ? (
		<Link class={style.backBtn} href={props.previousRoute}>
			<i class="icon-arrow-left" />
		</Link>
	) : null;

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
