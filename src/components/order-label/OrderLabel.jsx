
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// redux actions
import { toggleOrderLabelBanner } from '../../store/actions/ui';
import OrderLabelDrawer from './order-label-drawer/OrderLabelDrawer.jsx';
import OrderLabelBanner from './order-label-banner/OrderLabelBanner.jsx';

const mapStateToProps = (state) => ({ orders: state.orders, ui: state.ui })

class OrderLabel extends Component {

	state = {
		orderLabelDrawerOpen: false
	}

	toggleOrderLabelDrawer = () => {
		if (this.state.orderLabelDrawerOpen) {
			this.setState({
				orderLabelDrawerOpen: false
			});
		} else {
			this.setState({
				orderLabelDrawerOpen: true
			});
		}
		this.props.toggleOrderLabelBanner();
	}

	render() {

		const { orders } = this.props;
		return (
			<div>
				<OrderLabelBanner
					open={this.props.ui.orderLabelBannerOpen}
					currentOrder={orders.currentOrder}
					openOrderLabelDrawer={this.toggleOrderLabelDrawer}
				/>
				<OrderLabelDrawer
					open={this.state.orderLabelDrawerOpen}
					toggleDrawer={this.toggleOrderLabelDrawer}
				/>
			</div>
		)
	}
};

export default connect(mapStateToProps, { toggleOrderLabelBanner })(OrderLabel);