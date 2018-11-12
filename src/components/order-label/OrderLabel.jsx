
import { h } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux';

import style from './style';

const OrderLabel = connect(state => state)((props, state) => {
	const { order } = props;
	return (order.items && order.items.length > 0 ? (
		<Link class={style.orderLabelContainer} href={`/pedidos/${order.id}`}>
			<span style="text-transform: capitalize;">confirmar pedido</span>
			<span> SubTotal: R$ {order.totalPrice}</span>
		</Link>
	) : null);
});

export default OrderLabel;