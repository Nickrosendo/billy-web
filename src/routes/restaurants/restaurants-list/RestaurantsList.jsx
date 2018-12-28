import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';

const RestaurantsList=(props, state) => (
	<div>
		<div class={style.logoContainer}>
			<img class={style.logoImg} src={require('../../../assets/images/billy-pizza.png')} />
			<span> Billy </span>
		</div>
		<ul class={style.verticalList}>
			{props.restaurants.map(item => (
				<Link class={style.verticalListItem} href={`/restaurantes/${item._id}`}>
					<img src={item.logo} />
					<div class={style.itemContent}>
						<p>{item.name}</p>
						<p> Aberto - 10h ~ 22h</p>
						<p> Hambúrgueria</p>
						<div style="display: flex; align-items: center; ">
							<p style="margin-right: 20px;">
								<i class="icon-map-marker" /> 200m
						 </p>
							<p>
								<i class="icon-clock-o" /> 40min
						 </p>
						</div>
						<p style="color: rgb(255, 180, 106);"> <i class="icon-star" /> <i class="icon-star" /> <i class="icon-star" /> <i class="icon-star-half-empty" /> (9000+)</p>
					</div>
				</Link>
			))}
		</ul>
	</div>
);

export default RestaurantsList;