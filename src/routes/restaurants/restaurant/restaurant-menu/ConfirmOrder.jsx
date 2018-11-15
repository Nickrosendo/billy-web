
import { h } from 'preact';

import style from './style';

const ConfirmOrder = (props) => {
	console.log('confirm props: ', props);
	return (
		<div class={style.confirmOrderLabelContainer} onClick={props.handleConfirmOrder}>
			<span style="text-transform: capitalize;">( {props.unconfirmedOrder.items.length} ) confirmar pedido</span>
			<span> SubTotal: R$ {props.unconfirmedOrder.totalPrice}</span>
		</div>
	);
};

export default ConfirmOrder;