import { h } from 'preact';
import style from './style';

const VerticalListItem = props => {

	return (
		<li class={style.verticalListItem} onClick={() => props.onClick(props.restaurant._id)}>
			<img src={require('../../../assets/images/mock-logo-1.png')} />
			<div class={style.itemContent}>
				<p>{props.restaurant.name}</p>
			</div>
		</li>
	);
};


export default VerticalListItem;
