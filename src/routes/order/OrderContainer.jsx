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

				<div style="margin-top: 30px; background: #216C2A; color: #fff; padding: 8px; border: 1px solid #fff; border-radius: 8px;">
					<p class="text-center"> Total: R$ {props.order.totalPrice}</p>
					<p>Itens: </p>
					{props.order.items.map(i =>
						(
							<p style="display: flex; justify-content: space-between; border-bottom: 1px dotted #fff; margin-bottom: 20px;">
								<span> Nome: {i.name}</span>
								<span> Preço: {i.price}</span>
							</p>
						)
					)}
				</div>
			</div>
		);
	}
}

export default OrderDetails;
