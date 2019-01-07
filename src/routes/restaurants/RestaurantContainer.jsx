import { h, Component } from 'preact';
import { route } from 'preact-router';
import { connect } from 'preact-redux';

import reduce from '../../redux/reducers';
import * as actions from '../../redux/actions';

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

	restaurant() {
		const findRestaurant=this.props.restaurants.find(r => r._id===this.props.id);
		if (findRestaurant) {
			return (<RestaurantMenu addItem={this.handleAddOrderItem} restaurant={findRestaurant} />);
		}
		return this.fetchingLoader();
	}

	goToDetails(id) {
		route(`/restaurantes/${id}`);
	}

	hasOrder() {
		if (this.props.order.items.length>0) {
			return (<OrderLabel />);
		}
		return null;
	}

	constructor(...args) {
		super(...args);
		this.handleAddOrderItem=this.handleAddOrderItem.bind(this);
	}

	render(props) {
		const routeContent=props.id? this.restaurant():<RestaurantsList restaurants={this.props.restaurants} />;
		return (
			<div>
				<div>
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
