
import { h } from 'preact';
import { connect } from 'preact-redux';

import style from './style';

const OrderLabel = connect(state => state)((props, state) => {
	const { order } = props;
	return (order.items.length > 0 ? (
		<div class={style.orderLabelContainer}>
			Total: R$ {order.totalPrice}
			<p>(Clique para ver detalhes)</p>
		</div>
	) : null);
});

export default OrderLabel;