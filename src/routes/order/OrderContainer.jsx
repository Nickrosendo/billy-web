import { h } from 'preact';
import { route } from 'preact-router';
import { connect } from 'preact-redux';

// import style from './style';

import OrderDetails from './order-details/OrderDetails.jsx';
import OrdersList from './orders-list/OrdersList.jsx';


const OrderContainer=connect(state => state)((props) => {
	if (!props.firebase.auth.uid) {
		return route('/', true);
	}
	return (
		<div>
			{
				props.id? <OrderDetails />:<OrdersList />
			}
		</div>
	);
});

export default OrderContainer;
