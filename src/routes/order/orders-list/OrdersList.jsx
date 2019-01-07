import { h } from 'preact';
import { connect } from 'preact-redux';

import OrdersListItem from './OrdersListItem.jsx';

import style from './style.css';

const OrdersList=connect(state => state)((props, state) => {
	const { orders }=props;
	return (
		<div>
			<h1 style="text-align: center;">Histórico de pedidos</h1>
			<ul class={style.ordersList}>
				{orders.map(item => (
					<OrdersListItem order={item} />
				))}
			</ul>
		</div>
	);
});

export default OrdersList;