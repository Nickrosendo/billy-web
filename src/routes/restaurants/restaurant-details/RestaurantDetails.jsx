import { h } from 'preact';
import style from './style';

const RestaurantDetails = (props, state) => {
	return (
		<div class={style.detailContainer } style="padding-top: 15px;">
			<h1 class="text-center">
				{props.restaurant.name}
			</h1>
			<div style="border: 1px solid #ddd; border-radius: 8px; padding: 8px; margin: 15px 0; text-align: center;">
				<p style="background: #563d7c; color: #fff; font-weight: 600; padding: 8px; margin: 8px 0; text-align: center; border-radius: 12px;">
					{props.restaurant.menu[0].name}
				</p>
				<img style="width: 50%; height: 100px; border-radius: 8px; display: inline-block;" src={props.restaurant.menu[0].img} />
				<div style="margin: 10px 0;">
					<p style="font-size: 18px; color: #444; font-weight: 600;"><i class="icon-coin-dollar" /> R$: <span>	{props.restaurant.menu[0].price} </span></p>
					<div style="padding: 8px; background: #ddd; border-radius: 6px; margin-top: 10px; text-align: left;">
						<p style="font-size: 16px; color: #444; font-weight: 600;"><i class="icon-spoon-knife" /> Ingredientes: </p>
						{props.restaurant.menu[0].ingredients.map(i => (
							<p> {i}</p>
						))}
					</div>
					<button style="padding: 6px; border-radius: 6px; background: #28a745; color: #fff; border: none; margin-top: 10px; display: block; width: 100%;">
						Pedir
					</button>
				</div>
			</div>
		</div>
	);
};

export default RestaurantDetails;
