import { h } from 'preact';
import style from './style';

const VerticalListItem = props => (
	<li class={style.verticalListItem}>
		<img src={require('../../../assets/images/mock-logo-1.png')} />
		<div class={style.itemContent}>
			<p>{props.restaurant.name}</p>
			{/* <span> {props.restaurant.foodType}</span> */}
		</div>
	</li>
);

export default VerticalListItem;
