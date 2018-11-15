import { h, Component } from 'preact';
import { route } from 'preact-router';
import { connect } from 'preact-redux';

import reduce from '../../reducers';
import * as actions from '../../actions';

import style from './style';

@connect(reduce, actions)
class OrderDetails extends Component {

	render(props) {
		return (
			<div>
				<h1 class="text-center"> Conta</h1>
				<div style="margin-top: 30px; padding: 8px; color: #444;">
					<p style="text-align: center; "> Itens </p>
					{props.order.items.map(i =>
						(
							<div>
								<div style="display: flex; justify-content: space-between; background: #fff3cd; color: #856404; border-radius: 12px; padding: 8px; margin: 10px 0;">
									<span>Status do pedido: </span>
									<span>à confirmar</span>
								</div>
								<div style="border-bottom: 1px dotted #444; border-top: 1px dotted #444; padding: 10px; margin: 10px 0;">
									<p style="display: flex; justify-content: space-between;">
										<span>Horário do pedido:</span>
										<span> {new Date().getHours() === 0 ? '00' : new Date().getHours()}:{new Date().getMinutes()}</span>
									</p>
									<p style="display: flex; justify-content: space-between;">
										<span>Item:</span>
										<span>{i.name}</span>
									</p>
									<p style="display: flex; justify-content: space-between;">
										<span>Quantidade: </span>
										{/* <span>{i.quantity}</span> */}
										<div style="display: flex; width: 80px; justify-content: space-between; align-items: center;">
											<button style="padding: 4px; color: #444; border: 1px solid #ddd;	background: #eee;	border-radius: 8px;	display: block; font-size: 10px;" type="button"><i class="icon icon-minus" /></button>
											<span>{i.quantity}</span>
											<button style="padding: 4px; color: #444; border: 1px solid #ddd;	background: #eee;	border-radius: 8px;	display: block;	font-size: 10px;" type="button"><i class="icon icon-plus" /></button>
										</div>
									</p>
									<p style="display: flex; justify-content: space-between;">
										<span>Preço unitário:</span>
										<span>R$ {i.price} </span>
									</p>
									<p style="display: flex; justify-content: space-between;">
										<span>SubTotal:</span>
										<span>R$ {i.price * i.quantity} </span>
									</p>

									{i.observation ? (
										<p style="display: flex; justify-content: space-between;">
											<span>Observações:</span>
											<span>{i.observation}</span>
										</p>
									) : null
									}
									<button style="padding: 6px; border-radius: 6px;background: #216C2A;color: #fff;border: none;margin-top: 10px;	display: block;	width: 100%;" >
										Confirmar pedido
									</button>
								</div>
							</div>
						)
					)}
					<p style="text-align: center; margin-top: 10px;"> Pagamento </p>
					<div style="border-bottom: 1px dotted #444; border-top: 1px dotted #444; margin: 10px 0; padding: 10px;">
						<p style="display: flex; justify-content: space-between;">
							<span>Subtotal: </span>
							<span>R$ {props.order.totalPrice}</span>
						</p>
						<p style="display: flex; justify-content: space-between;">
							<span>Total: </span>
							<span>R$ {props.order.totalPrice}</span>
						</p>
					</div>
				</div>
				<button style="padding: 6px; border-radius: 6px;background: #216C2A;color: #fff;border: none;margin-top: 10px;	display: block;	width: 100%;" >
					Pedir a conta
				</button>
			</div>
		);
	}
}

export default OrderDetails;
