
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import style from './OrderLabel.module.css';

import OrderLabelDrawer from './OrderLabelDrawer.jsx';

const mapStateToProps = (state) => ({ orders: state.orders })

class OrderLabel extends Component {

	state = {
		orderLabelDrawerOpen: false
	}

	openOrderLabelDrawer = () => {
		this.setState({
			orderLabelDrawerOpen: true
		})
	}

	closeOrderLabelDrawer = () => {
		this.setState({
			orderLabelDrawerOpen: false
		})
	}
	

	render() {
		const { orders } = this.props;
		return (orders && orders.currentOrder && orders.currentOrder.status !== 'finalizada' && orders.currentOrder.id && orders.currentOrder.items.length > 0 ? (
			<div>
				<OrderLabelDrawer open={this.state.orderLabelDrawerOpen} openDrawer={this.openOrderLabelDrawer} closeDrawer={this.closeOrderLabelDrawer
				}/>
				<div className={style.orderLabelContainer} onClick={this.openOrderLabelDrawer}>
					{/* <Link className={style.orderLabelContainer} to={`/pedidos/${orders.currentOrder.id}`}></Link> */}
					<i className="icon icon-bell" style={{ fontSize: 20 }} />
					<span style={{ textTransform: 'capitalize' }}> Acompanhar pedido</span>
					<span className={style.orderLabelPriceContainer}> R$ {orders.currentOrder.totalPrice}</span>
				</div>
			</div>
		) : null);
	}
};

export default connect(mapStateToProps)(OrderLabel);