import { h } from 'preact';
import style from './style';

import VerticalListItem from '../../list-items/vertical-list-item';

const VerticalList = (props) => (
	<ul class={style.verticalList}>
		{props.listItems.map(item => (
			<VerticalListItem restaurant={item} key={item._id} />
		))}
	</ul>
);

export default VerticalList;
