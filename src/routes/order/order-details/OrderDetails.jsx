import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import OrderItem from './OrderItem.jsx';

import { updateCurrentOrder, setCurrentOrder } from '../../../store/actions/orders';

import style from './OrderDetails.module.css';

class OrderDetails extends Component {

	handleSetCurrentOrder = () => {
		if (this.props.orders.currentOrder && this.props.orders.currentOrder.id === this.props.match.params.id) {
			return false;
		}
		if (this.props.orders.history.length && this.props.match.params.id) {
			const currentOrder = this.props.orders.history.find(o => o.id === this.props.match.params.id);
			// console.log('this.props.orders.history: ', this.props.match.params.id)
			// console.log('currentOrder::', currentOrder);
			this.props.setCurrentOrder(currentOrder);
		}
	}

	handleUpdateOrderItem(updatedItem) {
		
		const itemIndex = this.props.orders.currentOrder.items.findIndex(i => i._id === updatedItem._id);
		let updatedItems = [...this.props.orders.currentOrder.items];
		if (itemIndex !== -1) {
			updatedItems[itemIndex] = updatedItem;
		}

		const updatedTotalPrice = updatedItems.map(i => (i.quantity * i.price)).reduce((a, b) => (a + b), 0);
		console.log('updatedTotalPrice: ', updatedTotalPrice);
		this.props.updateCurrentOrder({
			...this.props.orders.currentOrder,
			totalPrice: updatedTotalPrice,
			items: [...updatedItems]
		});
	}

	handleRemoveOrderItem(item) {
		const itemIndex = this.props.orders.currentOrder.items.findIndex(i => i._id === item._id && i.orderedDate === item.orderedDate);
		let updatedItems = [...this.props.orders.currentOrder.items];
		if (itemIndex !== -1) {
			updatedItems.splice(itemIndex, 1);
		}
		const updatedTotalPrice = updatedItems.map(i => (i.quantity * i.price)).reduce((a, b) => (a + b), 0);

		this.props.updateCurrentOrder({
			...this.props.order,
			totalPrice: updatedTotalPrice,
			items: [...updatedItems]
		});
	}

	constructor(...args) {
		super(...args);
		this.handleUpdateOrderItem = this.handleUpdateOrderItem.bind(this);
		this.handleRemoveOrderItem = this.handleRemoveOrderItem.bind(this);
		this.handleSetCurrentOrder();
	}

	render() {
		return this.props.orders.currentOrder && this.props.orders.currentOrder.id ? (
			<div>
				<h1 className="text-center"> Detalhes do pedido</h1>
				<div className={style.orderDetailsOrderContainer}>
					<Link className={style.orderDetailsAddMoreItensBtn} to={`/restaurantes/${this.props.orders.currentOrder.restaurantId}`}>
						Adicionar mais itens
					</Link>
					{this.props.orders.currentOrder.items.map(i =>
						(
							<OrderItem key={i._id + i.orderedDate} item={i} handleUpdateOrderItem={this.handleUpdateOrderItem} handleRemoveOrderItem={this.handleRemoveOrderItem} />
						)
					)}
					<p className={style.orderDetailsPaymentTitle}> Pagamento </p>
					<div className={style.orderDetailsPaymentContainer}>
						<p className={style.orderDeatilsContentField}>
							<span>Subtotal: </span>
							<span>R$ {this.props.orders.currentOrder.totalPrice}</span>
						</p>
						<p className={style.orderDeatilsContentField}>
							<span>Total: </span>
							<span>R$ {this.props.orders.currentOrder.totalPrice}</span>
						</p>
					</div>
				</div>
				<button className={style.orderDetailsPaymentBtn} >
					Realizar pagamento
				</button>
			</div>
		): (
			<h1>Pedido não encontrado</h1>
		);
	}
}

const mapStateToProps = (state) => ({ orders: state.orders })

export default connect(mapStateToProps, {
	updateCurrentOrder,
	setCurrentOrder
})(OrderDetails);
