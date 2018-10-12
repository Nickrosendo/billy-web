import { h } from 'preact';
import style from './style';

import VerticalList from '../../components/lists/vertical-list';

const Restaurants = () => (
	<div class={style.restaurants}>
		<VerticalList />
	</div>
);

export default Restaurants;
