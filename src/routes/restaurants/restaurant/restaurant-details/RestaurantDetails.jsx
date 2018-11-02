import { h } from 'preact';
import { connect } from 'preact-redux';
import { addOrderItem } from '../../../../actions';

import style from './style';

const RestaurantDetails = connect(state => state)((props, state) => {

	const menuItemsMap = props.restaurant.menu.map(item => (
		<div class={style.menuItemContainer}>
			<p class={style.menuItemName}>
				{item.name}
			</p>
			<img class={style.menuItemImg} src={item.img} />
			<div class={style.menuItemData}>
				<p class={style.menuItemDataPrice} ><i class="icon-coin-dollar" /> R$: <span>	{item.price} </span></p>
				<div class={style.menuItemDataIngredients} >
					<p class={style.menuItemDataIngredientsTitle}><i class="icon-spoon-knife" /> Ingredientes: </p>
					{item.ingredients.map(i => (
						<p> {i}</p>
					))}
				</div>
				<button class={style.menuItemDataOrder} onClick={() => props.dispatch(addOrderItem(item))}>
					Pedir
				</button>
			</div>
		</div>
	));

	return (
		<div class={style.detailContainer}>
			<h1 class="text-center">
				{props.restaurant.name}
			</h1>
			{menuItemsMap}
		</div>
	);
});

export default RestaurantDetails;
