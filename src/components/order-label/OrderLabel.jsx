
import React, { Component } from 'react';
import { connect } from 'react-redux';

// redux actions
import { closeOrderLabelBanner, openOrderLabelBanner, toggleOrderLabelDrawer } from '../../store/actions/ui';

import OrderLabelDrawer from './order-label-drawer/OrderLabelDrawer.jsx';
import OrderLabelBanner from './order-label-banner/OrderLabelBanner.jsx';

const mapStateToProps = (state) => ({ orders: state.orders, ui: state.ui })

class OrderLabel extends Component {

	render() {

		const { orders } = this.props;
		return (
			<div>
				<OrderLabelBanner
					open={this.props.ui.orderLabelBannerOpen}
					currentOrder={orders.currentOrder}
					openOrderLabelDrawer={this.props.toggleOrderLabelDrawer}
				/>
				<OrderLabelDrawer
					open={this.props.ui.orderLabelDrawerOpen}
					toggleDrawer={this.props.toggleOrderLabelDrawer}
				/>
			</div>
		)
	}
};

export default connect(mapStateToProps, { closeOrderLabelBanner, openOrderLabelBanner, toggleOrderLabelDrawer })(OrderLabel);