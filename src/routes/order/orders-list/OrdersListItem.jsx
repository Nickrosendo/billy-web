import { h } from 'preact';
import moment from 'moment';
import { Link } from 'preact-router';

import style from './style.css';

const OrdersListItem=(props) => (
	<Link class={style.orderListItem} href={`/pedidos/${props.order._id}`}>
		<div class={style.orderListItemPrice}>
			<p> <p style="font-size:18px;" class="icon-coin-dollar" /> {props.order.totalPrice}</p>
		</div>
		<div class={style.orderListItemCard}>
			<p style="font-size: 18px;">{ props.order.restaurantName}</p>
			<p> {props.order.status} | {props.order.items.length} itens </p>
			<p> {moment(props.order.date).format('DD/MM/YYYY')} </p>
			<p style="color: rgb(255, 180, 106); cursor: pointer;"> <i class="icon-star" /> <i class="icon-star" /> <i class="icon-star" /> <i class="icon-star-half-empty" /></p>
		</div>
	</Link>
);


export default OrdersListItem;