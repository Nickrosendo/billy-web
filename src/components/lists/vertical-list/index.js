import { h } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style';

import VerticalListItem from '../../list-items/vertical-list-item';

// const listItems = [
// 	{
// 		id: '1',
// 		title: "McDonald's",
// 		foodType: 'Fast-Food'
// 	},
// 	{
// 		id: '2',
// 		title: 'OutBack',
// 		foodType: 'Comida australiana'
// 	},
// 	{
// 		id: '3',
// 		title: "Wendy's",
// 		foodType: 'Fast-Food'
// 	},
// 	{
// 		id: '4',
// 		title: 'StarBucks',
// 		foodType: 'Cafeteria'
// 	}
// ];

const VerticalList = (props) => (
	<ul class={style.verticalList}>
		{props.listItems.map(item => (
			<VerticalListItem restaurant={item} key={item.id} />
		))}
	</ul>
);

export default VerticalList;
