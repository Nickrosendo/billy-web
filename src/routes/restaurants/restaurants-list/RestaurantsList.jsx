import { h } from 'preact';

import RestaurantsListItem from './RestaurantsListItem.jsx';

import style from './style.css';

const RestaurantsList=(props, state) => (
	<div>
		<div class={style.logoContainer}>
			<img class={style.logoImg} src={require('../../../assets/images/billy-pizza.png')} />
			<span> Billy </span>
		</div>
		<ul class={style.verticalList}>
			{props.restaurants.map(item => (
				<RestaurantsListItem item={item} />
			))}
		</ul>
	</div>
);

export default RestaurantsList;