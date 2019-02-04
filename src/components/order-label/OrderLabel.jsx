
import { h } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux';

import style from './style';

const OrderLabel = connect(state => state)((props, state) => {
	const { orders } = props;
	return (orders && orders.currentOrder.id && orders.currentOrder.items.length > 0 ? (
		<Link class={style.orderLabelContainer} href={`/pedidos/${orders.currentOrder.id}`}>
			<i class="icon icon-bell" style="font-size: 20px;" />
			<span style="text-transform: capitalize;"> Acompanhar pedido</span>
			<span class={style.orderLabelPriceContainer}> R$ {orders.currentOrder.totalPrice}</span>
		</Link>
	) : null);
});

export default OrderLabel;