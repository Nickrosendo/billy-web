import { h } from 'preact';

import VerticalList from '../../../../components/lists/vertical-list';

const RestaurantsList = (props, state) => (
	<div>
		<div class="logoContainer" href="/">
			<img class="logoImg" src={require('../../../../assets/images/billy-icon.png')} />
			<span> CardApp.io </span>
		</div>
		<VerticalList listItems={props.restaurants} />
	</div>
);

export default RestaurantsList;