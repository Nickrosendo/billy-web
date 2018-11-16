import { h, Component } from 'preact';
import { route } from 'preact-router';
import { connect } from 'preact-redux';

import reduce from '../../reducers';
import * as actions from '../../actions';

import style from './style';

@connect(reduce, actions)
class OrderDetails extends Component {

	handleAddMoreItens() {
		console.log('order Props: ', this.props);
		route(`/restaurantes/${this.props.order.restaurantId}`, true);
	}

	constructor(...args) {
		super(...args);
		this.handleAddMoreItens = this.handleAddMoreItens.bind(this);
	}

	render(props) {
		return (
			<div>
				<h1 class="text-center"> Detalhes do pedido</h1>
				<div class={style.orderContainer}>
					<button class={style.addMoreItensBtn} onClick={this.handleAddMoreItens}>
						Adicionar mais itens
					</button>
					{/* <p style="display: flex; justify-content: space-between;">
						<span>Horário do pedido:</span>
						<span> {new Date().getHours() === 0 ? '00' : new Date().getHours()}:{new Date().getMinutes()}</span>
					</p> */}
					{/* <p style="text-align: center; "> Itens </p> */}
					{props.order.items.map(i =>
						(
							<div>
								{/* <div style="display: flex; justify-content: space-between; background: #fff3cd; color: #856404; border-radius: 12px; padding: 8px; margin: 10px 0;">
									<span>Status do pedido: </span>
									<span>à confirmar</span>
								</div> */}
								<div class={style.orderItemContainer}>
									<div class={style.orderItemEditContainer}>
										<button class={style.orderItemEditBtn}> <i class="icon icon-pencil1" /> </button>
										<button class={style.orderItemEditBtn}> <i class="icon icon-close" /> </button>
									</div>
									<div class={style.orderItemContentContainer}>
										<p class={style.orderItemContentField}>
											{/* <span>Quantidade: </span> */}
											<span>{i.quantity}x</span>
											{/* <div style="display: flex; width: 80px; justify-content: space-between; align-items: center;">
												<button style="padding: 4px; color: #444; border: 1px solid #ddd;	background: #eee;	border-radius: 8px;	display: block; font-size: 10px;" type="button"><i class="icon icon-minus" /></button>
												<span>{i.quantity}</span>
												<button style="padding: 4px; color: #444; border: 1px solid #ddd;	background: #eee;	border-radius: 8px;	display: block;	font-size: 10px;" type="button"><i class="icon icon-plus" /></button>
											</div> */}
										</p>
										<p class={style.orderItemContentField}>
											{/* <span>Item:</span> */}
											<span>{i.name}</span>
										</p>
										<p>R$ {i.price * i.quantity} ( {i.quantity} x {i.price} )</p>
										{/* <p style="display: flex; justify-content: space-between;">
											<span>SubTotal:</span>
											<span>R$ {i.price * i.quantity} </span>
										</p> */}
									</div>
									{i.observation ? (
										<p> Observações: {i.observation}</p>
									) : null
									}
									{/* <button style="padding: 6px; border-radius: 6px;background: #216C2A;color: #fff;border: none;margin-top: 10px;	display: block;	width: 100%;" >
										Confirmar pedido
									</button> */}
								</div>
							</div>
						)
					)}
					<p class={style.orderPaymentTitle}> Pagamento </p>
					<div class={style.orderPaymentContainer}>
						<p class={style.orderItemContentField}>
							<span>Subtotal: </span>
							<span>R$ {props.order.totalPrice}</span>
						</p>
						<p class={style.orderItemContentField}>
							<span>Total: </span>
							<span>R$ {props.order.totalPrice}</span>
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

export default OrderDetails;
