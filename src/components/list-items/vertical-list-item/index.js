import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style';

const VerticalListItem = props => (
	<Link class={style.verticalListItem} href={`/restaurantes/${props.restaurant._id}`}>
		<img src={props.restaurant.logo} />
		<div class={style.itemContent}>
			<p>{props.restaurant.name}</p>
		</div>
	</Link>
);


export default VerticalListItem;
