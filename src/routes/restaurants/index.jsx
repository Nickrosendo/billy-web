import { h, Component } from 'preact';
import axios from 'axios';

import style from './style';

import VerticalList from '../../components/lists/vertical-list';


class Restaurants extends Component {

	state = {
		restaurants: []
	}

	componentDidMount() {
		axios.get('https://billy-server.herokuapp.com/api/restaurants')
			.then(res => this.setState({ restaurants: res.data }));
	}

	render(props, state) {
		return (
			<div class={style.restaurants}>
				<VerticalList listItems={this.state.restaurants} />
			</div>
		);
	}
}

export default Restaurants;
