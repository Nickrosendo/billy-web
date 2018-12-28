import { h } from 'preact';

import style from './style';

import OrderDetails from './order-details/OrderDetails.jsx';
import OrdersList from './orders-list/OrdersList.jsx';


const OrderContainer=(props) => (
	<div>
		{
			props.id? <OrderDetails />:<OrdersList />
		}
	</div>
);

export default OrderContainer;
