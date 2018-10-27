import { h } from 'preact';

import VerticalList from '../../components/lists/vertical-list';

const RestaurantsList = (props, state) => <VerticalList listItems={props.restaurants} onListClick={props.goToDetails} />;

export default RestaurantsList;