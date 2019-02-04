import { h } from 'preact';
import { connect } from 'preact-redux';
import { Link } from 'preact-router/match';

import OrdersListItem from './OrdersListItem.jsx';

import style from './style.css';

const OrdersList=connect(state => state)((props, state) => {
	const { orders }=props;
	// const orders = [];
	const ordersMap=() => orders.history.map(item => (
		<OrdersListItem order={item} />
	));
	const noOrders=() => (
		<li class={style.noOrdersContainer} >
			<p class={style.noOrdersIcon} >
				<i class="icon-edit" />
			</p>
			<p>Você não possui nenhum pedido!</p>
			<Link href={'/restaurantes'} class={style.noOrdersBtn} >
				Buscar restaurantes
			</Link>
		</li>
	);

	return (
		<div>
			<h1 style="text-align: center; font-weight: 500;">Histórico de pedidos</h1>
			<ul class={style.ordersList}>
				{
					orders.history.length>0? ordersMap():noOrders()
				}
			</ul>
		</div>
	);
});

export default OrdersList;