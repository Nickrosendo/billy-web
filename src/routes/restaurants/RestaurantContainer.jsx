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

	hasOrder() {
		if (this.props.order.order.items.length>0) {
			return (<OrderLabel />);
		}
		return null;
	}

	constructor(...args) {
		super(...args);
		this.handleAddOrderItem=this.handleAddOrderItem.bind(this);
	}

	render(props) {
		console.log('restaurant props: ', props);
		const routeContent=props.id? <RestaurantMenu id={props.id} addItem={this.handleAddOrderItem} />:<RestaurantsList restaurants={this.props.restaurant.restaurants} />;
		return (
			<div>
				<div style={this.props.order.order.items.length>0? 'padding-bottom: 66px;':''}>
					{
						routeContent
					}
				</div>
				{this.hasOrder()}
			</div>
		);
	}
}

export default RestaurantsContainer;
