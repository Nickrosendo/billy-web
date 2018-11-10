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
				<h1 class="text-center"> Detalhes do pedido</h1>
				<button style="padding: 6px; border-radius: 6px;background: #216C2A;color: #fff;border: none;margin-top: 10px;	display: block;	width: 100%;" >
					Pedir a conta
				</button>
				<div style="margin-top: 30px; padding: 8px; color: #444;">
					<div style="border-bottom: 1px dotted #444; border-top: 1px dotted #444; margin: 20px 0; padding: 10px;">
						<p style="display: flex; justify-content: space-between;">
							<span>Subtotal: </span>
							<span>R$ {props.order.totalPrice}</span>
						</p>
						<p style="display: flex; justify-content: space-between;">
							<span>Total: </span>
							<span>R$ {props.order.totalPrice}</span>
						</p>
					</div>
					<p>
						Descrição:
					</p>
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
										<span>{i.quantity}</span>
									</p>
									<p style="display: flex; justify-content: space-between;">
										<span>Preço unitário:</span>
										<span>R$ {i.price} </span>
									</p>
									<p style="display: flex; justify-content: space-between;">
										<span>SubTotal:</span>
										<span>R$ {i.price * i.quantity} </span>
									</p>
									<p style="display: flex; justify-content: space-between;">
										<span>Observações:</span>
										<span>{i.observation}</span>
									</p>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		);
	}
}

export default OrderDetails;
