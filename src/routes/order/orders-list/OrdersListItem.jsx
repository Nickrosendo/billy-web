import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import style from './OrdersList.module.css';

const OrdersListItem=(props) => (
	<Link className={style.orderListItem} to={`/pedidos/${props.order._id}`}>
		<div classname={style.orderListItemPrice}>
			<p> <p style={{ fontSize: 18 }} className="icon-coin-dollar" /> {props.order.totalPrice}</p>
		</div>
		<div className={style.orderListItemCard}>
			<p style={{ fontSize: 18 }}>{ props.order.restaurantName}</p>
			<p> {props.order.status} | {props.order.items.length} itens </p>
			<p> {moment(props.order.date).format('DD/MM/YYYY')} </p>
			<p style={{color: 'rgb(255,180,106)', cursor: 'pointer'}}> <i className="icon-star" /> <i className="icon-star" /> <i className="icon-star" /> <i className="icon-star-half-empty" /></p>
		</div>
	</Link>
);


export default OrdersListItem;