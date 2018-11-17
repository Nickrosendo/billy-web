import { h, Component } from 'preact';
import { route } from 'preact-router';
import { connect } from 'preact-redux';

import OrderItem from './OrderItem.jsx';

import reduce from '../../redux/reducers';
import * as actions from '../../redux/actions';

import style from './style';

@connect(reduce, actions)
class OrderContainer extends Component {

	handleAddMoreItens() {
		route(`/restaurantes/${this.props.order.restaurantId}`, true);
	}

	handleUpdateOrderItem(updatedItem) {
		const itemIndex = this.props.order.items.findIndex(i => i._id === updatedItem._id);
		let updatedItems = [...this.props.order.items];
		if (itemIndex !== -1) {
			updatedItems[itemIndex] = updatedItem;
		}

		const updatedTotalPrice = updatedItems.map(i => (i.quantity * i.price)).reduce((a, b) => (a + b), 0);

		this.props.updateOrder({
			...this.props.order,
			totalPrice: updatedTotalPrice,
			items: [...updatedItems]
		});
	}

	handleRemoveOrderItem(item) {
		const itemIndex = this.props.order.items.findIndex(i => i._id === item._id && i.orderedDate === item.orderedDate);
		let updatedItems = [...this.props.order.items];
		if (itemIndex !== -1) {
			updatedItems.splice(itemIndex, 1);
		}
		const updatedTotalPrice = updatedItems.map(i => (i.quantity * i.price)).reduce((a, b) => (a + b), 0);

		this.props.updateOrder({
			...this.props.order,
			totalPrice: updatedTotalPrice,
			items: [...updatedItems]
		});
	}

	constructor(...args) {
		super(...args);
		this.handleAddMoreItens = this.handleAddMoreItens.bind(this);
		this.handleUpdateOrderItem = this.handleUpdateOrderItem.bind(this);
		this.handleRemoveOrderItem = this.handleRemoveOrderItem.bind(this);
	}

	render() {
		return (
			<div>
				<h1 class="text-center"> Detalhes do pedido</h1>
				<div class={style.orderContainer}>
					<button class={style.addMoreItensBtn} onClick={this.handleAddMoreItens}>
						Adicionar mais itens
					</button>
					{this.props.order.items.map(i =>
						(
							<OrderItem key={i._id + i.orderedDate} item={i} handleUpdateOrderItem={this.handleUpdateOrderItem} handleRemoveOrderItem={this.handleRemoveOrderItem} />
						)
					)}
					<p class={style.orderPaymentTitle}> Pagamento </p>
					<div class={style.orderPaymentContainer}>
						<p class={style.orderItemContentField}>
							<span>Subtotal: </span>
							<span>R$ {this.props.order.totalPrice}</span>
						</p>
						<p class={style.orderItemContentField}>
							<span>Total: </span>
							<span>R$ {this.props.order.totalPrice}</span>
						</p>
					</div>
				</div>
				<button class={style.orderPaymentBtn} >
					Realizar pagamento
				</button>
			</div>
		);
	}
}

export default OrderContainer;
