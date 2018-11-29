
import { h } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux';

import style from './style';

const OrderLabel = connect(state => state)((props, state) => {
	const { order } = props;
	return (order && order.id && order.items.length > 0 ? (
		<Link class={style.orderLabelContainer} href={`/pedidos/${order.id}`}>
			<i class="icon icon-bell" style="font-size: 20px;" />
			<span style="text-transform: capitalize;"> Acompanhar pedido</span>
			<span class={style.orderLabelPriceContainer}> R$ {props.order.totalPrice}</span>
		</Link>
	) : null);
});

export default OrderLabel;