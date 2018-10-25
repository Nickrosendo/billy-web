import { h, Component } from 'preact';
import style from './style';

import VerticalList from '../../components/lists/vertical-list';


class Restaurants extends Component {
	render(props, state) {
		return (
			<div class={style.restaurants}>
				<VerticalList />
			</div>
		);
	}
}

export default Restaurants;
