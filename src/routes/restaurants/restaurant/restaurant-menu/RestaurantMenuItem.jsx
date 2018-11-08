import { h, Component } from 'preact';
import style from './style';

class RestaurantMenuItem extends Component {

	state = {
		quantity: 1
	}

	handleOrderItem() {
		this.props.addItem(this.props.item, this.state.quantity);
	}

	handleAdd() {
		this.setState({ quantity: this.state.quantity + 1 });
	}

	handleSubtract() {
		if (this.state.quantity > 1)
			this.setState({ quantity: this.state.quantity - 1 });
	}

	handleManualChange(event) {
		const value = event.target.value;
		if (value < 1) {
			this.setState({ quantity: 1 });
		}
		else {
			this.setState({ quantity: value });
		}
	}

	constructor(...args) {
		super(...args);
		this.handleOrderItem = this.handleOrderItem.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleSubtract = this.handleSubtract.bind(this);
		this.handleManualChange = this.handleManualChange.bind(this);
	}

	render(props) {
		return (
			<div class={style.menuItemContainer}>
				<p class={style.menuItemName}>
					{props.item.name}
				</p>
				<img class={style.menuItemImg} src={props.item.img} />
				<div class={style.menuItemData}>
					<p class={style.menuItemDataPrice} ><i class="icon-coin-dollar" /> R$: <span>	{props.item.price} </span></p>
					<div class={style.menuItemDataIngredients} >
						<p class={style.menuItemDataIngredientsTitle}><i class="icon-spoon-knife" /> Ingredientes: </p>
						{props.item.ingredients.map(i => (
							<p> {i}</p>
						))}
					</div>
					<div class={style.orderItemContainer}>
						<label for="qnt">Quantidade: </label>
						<input class={style.orderItemInput} onChange={this.handleManualChange} value={this.state.quantity} id="qnt" type="number" />
						<div class={style.orderItemQuantityContainer}>
							<button class={style.orderItemQuantityBtn} onClick={this.handleAdd}type="button"><i class="icon icon-plus" /></button>
							<button class={style.orderItemQuantityBtn} onClick={this.handleSubtract} type="button"><i class="icon icon-minus" /></button>
						</div>
						<button class={style.menuItemDataOrder} onClick={this.handleOrderItem}>
							Pedir
						</button>
					</div>
				</div>
			</div >
		);
	}
}

export default RestaurantMenuItem;