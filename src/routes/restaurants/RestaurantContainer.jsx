import { h, Component } from 'preact';
import { route } from 'preact-router';
import { connect } from 'preact-redux';

import reduce from '../../store/reducers';
import * as actions from '../../store/actions';

import OrderLabel from '../../components/order-label/OrderLabel.jsx';
import RestaurantsList from './restaurants-list/RestaurantsList.jsx';
import RestaurantMenu from './restaurant-menu/RestaurantMenu.jsx';

@connect(reduce, actions)
class RestaurantsContainer extends Component {

	fetchingLoader() {
		return (
			<h1 class="text-center">
				Carregando...
			</h1>
		);
	}

	handleAddOrderItem(orderItem) {
		this.props.addOrderItem(orderItem);
	}

	constructor(...args) {
		super(...args);
		this.handleAddOrderItem=this.handleAddOrderItem.bind(this);
	}

	render() {
		console.log('restaurant props: ');
		const routeContent=this.props.id? <RestaurantMenu id={this.props.id} addItem={this.handleAddOrderItem} />:<RestaurantsList restaurants={this.props.restaurant.restaurants} />;
		const hasOrder = this.props.order.order.items.length > 0 ? <OrderLabel /> : null;
		return (
			<div>
				<div style={this.props.order.order.items.length>0? 'padding-bottom: 66px;':''}>
					{
						routeContent
					}
				</div>
				{hasOrder}
			</div>
		);
	}
}

export default RestaurantsContainer;
