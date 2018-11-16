import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';

const RestaurantsList = (props, state) => (
	<div>
		<div class="logoContainer" href="/">
			<img class="logoImg" src={require('../../../../assets/images/billy-icon.png')} />
			<span> Billy </span>
		</div>
		<ul class={style.verticalList}>
			{props.restaurants.map(item => (
				<Link class={style.verticalListItem} href={`/restaurantes/${item._id}`}>
					<img src={item.logo} />
					<div class={style.itemContent}>
						<p>{item.name}</p>
					</div>
				</Link>
			))}
		</ul>
	</div>
);

export default RestaurantsList;