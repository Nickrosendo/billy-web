
import { h } from 'preact';

import style from './style';

const ConfirmOrder = (props) => {
	return (
		<div class={style.confirmOrderLabelContainer} onClick={props.handleConfirmOrder}>
			<i class="icon icon-list-alt" style="font-size: 20px;" />
			<span style="text-transform: capitalize;"> Confirmar pedido</span>
			<span> SubTotal: R$ {props.unconfirmedOrder.totalPrice}</span>
		</div>
	);
};

export default ConfirmOrder;