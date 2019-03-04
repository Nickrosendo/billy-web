import React from 'react';
import { Link } from 'react-router-dom';

import OrdersListItem from './OrdersListItem.jsx';

import style from './OrdersList.module.css';

const OrdersList=(props) => {
	const { orders }=props;
	const ordersMap=() => orders.map(item => (
		<OrdersListItem order={item} />
	));
	const noOrders=() => (
		<li className={style.noOrdersContainer} >
			<p className={style.noOrdersIcon} >
				<i className="icon-edit" />
			</p>
			<p>Você não possui nenhum pedido!</p>
			<Link to={'/'} class={style.noOrdersBtn} >
				Buscar restaurantes
			</Link>
		</li>
	);

	return (
		<div>
			<h1 style={{textAlign: 'center', fontWeight: 500 }} >Histórico de pedidos</h1>
			{/* <ul className={style.ordersList}>
				{
					orders.length>0? ordersMap():noOrders()
				}
			</ul> */}
		</div>
	);
};

export default OrdersList;