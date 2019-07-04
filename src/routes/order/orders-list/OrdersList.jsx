import React from 'react';
import { Link } from 'react-router-dom';

import OrdersListItem from './OrdersListItem.jsx';

import style from './OrdersList.module.css';

const OrdersList=(props) => {
	const { orders }=props;
	const OrdersMap=() => orders.map(item => (
		<OrdersListItem order={item} key={item.id} />
	));
	
	const NoOrders=() => (
		<li className={style.noOrdersContainer} >
			<p className={style.noOrdersIcon} >
				<i className="icon-edit" />
			</p>
			<p>Você não possui nenhum pedido!</p>
			<Link to={'/'} className={style.noOrdersBtn} >
				Buscar restaurantes
			</Link>
		</li>
	);

	return (
		<div>
			<h1 style={{textAlign: 'center', fontWeight: 500 }} >Histórico de pedidos</h1>
			<ul className={style.ordersList}>
				{
					orders.length>0? <OrdersMap /> : <NoOrders />
				}
			</ul>
		</div>
	);
};

export default OrdersList;