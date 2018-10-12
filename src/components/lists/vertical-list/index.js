import { h } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style';

import VerticalListItem from '../../list-items/vertical-list-item';

const listItems = [
	{
		id: '1',
		title: "McDonald's"
	},
	{
		id: '2',
		title: 'OutBack'
	},
	{
		id: '3',
		title: "Wendy's"
	},
	{
		id: '4',
		title: 'StarBucks'
	}
];

const VerticalList = () => (
	<ul class={style.verticalList}>
		{listItems.map(item => (
			<VerticalListItem title={item.title} id={item.id} key={item.id} />
		))}
	</ul>
);

export default VerticalList;
