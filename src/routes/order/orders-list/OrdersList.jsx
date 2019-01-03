import { h } from 'preact';

import OrdersListItem from './OrdersListItem.jsx';

import style from './style.css';

const orders = [
	{
		id: 1,
		date: new Date(),
		totalPrice: 159.99,
		items: [],
		restaurantId: ''
	},
	{
		id: 2,
		date: new Date(),
		totalPrice: 89.99,
		items: [],
		restaurantId: ''
	},
	{
		id: 3,
		date: new Date(),
		totalPrice: 1099.99,
		items: [],
		restaurantId: ''
	}
];

const OrdersList=(props, state) => (
	<div>
		<h1 style="text-align: center;">Histórico de pedidos</h1>
		<ul class={style.verticalList}>
			{orders.map(item => (
				<OrdersListItem order={item} />
			))}
		</ul>
	</div>
);

export default OrdersList;