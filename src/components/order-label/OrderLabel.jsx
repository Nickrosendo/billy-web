
import { h } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux';

import style from './style';

const OrderLabel = connect(state => state)((props, state) => {
	const { order } = props;
	return (order.items.length > 0 ? (
		<Link class={style.orderLabelContainer} href={`/pedidos/${order.id}`}>
			Total: R$ {order.totalPrice}
			<p>(Clique para ver detalhes)</p>
		</Link>
	) : null);
});

export default OrderLabel;