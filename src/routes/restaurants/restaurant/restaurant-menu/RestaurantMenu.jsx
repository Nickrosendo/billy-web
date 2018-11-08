import { h } from 'preact';

import RestaurantMenuItem from './RestaurantMenuItem.jsx';

import style from './style';

const RestaurantDetails = (props) => {

	const menuItemsMap = props.restaurant.menu.map(item => (
		<RestaurantMenuItem item={item} addItem={props.addItem} />
	));

	return (
		<div class={style.detailContainer}>
			<h1 class="text-center">
				{props.restaurant.name}
			</h1>
			{menuItemsMap}
		</div>
	);
};

export default RestaurantDetails;
