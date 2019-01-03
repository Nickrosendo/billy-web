import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style.css';

const RestaurantListItem=(props) => (
	<Link class={style.verticalListItem} href={`/restaurantes/${props.item._id}`}>
		<img src={props.item.logo} />
		<div class={style.itemContent}>
			<p>{props.item.name}</p>
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
);


export default RestaurantListItem;