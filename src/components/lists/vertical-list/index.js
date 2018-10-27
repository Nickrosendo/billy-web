import { h } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style';

import VerticalListItem from '../../list-items/vertical-list-item';

const VerticalList = (props) => (
	<ul class={style.verticalList}>
		{props.listItems.map(item => (
			<VerticalListItem restaurant={item} key={item._id} onClick={props.onListClick} />
		))}
	</ul>
);

export default VerticalList;
