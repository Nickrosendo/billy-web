
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import style from './OrderLabel.module.css';

const mapStateToProps = (state) => ({ orders: state.orders })

const OrderLabel=(props) => {
	const { orders }=props;
	return (orders&&orders.currentOrder.id&&orders.currentOrder.items.length>0? (
		<Link className={style.orderLabelContainer} to={`/pedidos/${orders.currentOrder.id}`}>
			<i className="icon icon-bell" style={{ fontSize: 20 }} />
			<span style={{ textTransform: 'capitalize' }}> Acompanhar pedido</span>
			<span className={style.orderLabelPriceContainer}> R$ {orders.currentOrder.totalPrice}</span>
		</Link>
	):null);
};

export default connect(mapStateToProps)(OrderLabel);