import { h } from 'preact';
import style from './style';

const mockSources = [
	require('../../../assets/images/mock-logo-1.png'),
	require('../../../assets/images/mock-logo-2.png'),
	require('../../../assets/images/mock-logo-3.png'),
	require('../../../assets/images/mock-logo-4.png')
];

const VerticalListItem = props => (
	<li class={style.verticalListItem}>
		<img src={mockSources[props.restaurant.id - 1]} />
		<div class={style.itemContent}>
			<p>{props.restaurant.title}</p>
			<span> {props.restaurant.foodType}</span>
		</div>
	</li>
);

export default VerticalListItem;
