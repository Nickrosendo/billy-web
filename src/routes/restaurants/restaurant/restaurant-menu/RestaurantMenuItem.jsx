import { h, Component } from 'preact';
import style from './style';

class RestaurantMenuItem extends Component {

	state={
		quantity: 1,
		observation: ''
	}

	handleOrderItem() {
		const orderItem={
			...this.props.item,
			quantity: this.state.quantity,
			observation: this.state.observation,
			orderedDate: new Date(),
			status: 'à confirmar'
		};
		this.props.handleAddOrderItem(orderItem);
	}

	handleAdd() {
		this.setState({ quantity: this.state.quantity+1 });
	}

	handleSubtract() {
		if (this.state.quantity>1)
			this.setState({ quantity: this.state.quantity-1 });
	}

	handleManualChange(event) {
		const value=event.target.value;
		if (value<1) {
			this.setState({ quantity: 1 });
		}
		else {
			this.setState({ quantity: value });
		}
	}

	handleAddObservation(event) {
		const observation=event.target.value;
		if (observation) {
			this.setState({ observation });
		}
	}

	constructor(...args) {
		super(...args);
		this.handleOrderItem=this.handleOrderItem.bind(this);
		this.handleAdd=this.handleAdd.bind(this);
		this.handleSubtract=this.handleSubtract.bind(this);
		this.handleManualChange=this.handleManualChange.bind(this);
		this.handleAddObservation=this.handleAddObservation.bind(this);
	}

	render(props) {
		return (
			<div class={style.menuItemContainer}>
				<p class={style.menuItemName}>
					{props.item.name}
				</p>
				<div class={style.menuItemData}>
					<img class={style.menuItemImg} src={props.item.img} />
					<div class={style.menuItemDataIngredients}>
						{props.item.ingredients.map(i => (
							<span> {i+', '} </span>
						))}
					</div>
				</div>
				<div class={style.orderItemContainer}>
					<div class={style.orderItemQuantityContainer}>
						<button class={style.orderItemQuantityBtn+' transparent-btn-pressed'} onClick={this.handleSubtract} type="button"><i class="icon icon-minus1" /></button>
						<input class={style.orderItemInput} onChange={this.handleManualChange} value={this.state.quantity} id="qnt" type="number" />
						<button class={style.orderItemQuantityBtn+' transparent-btn-pressed'} onClick={this.handleAdd} type="button"><i class="icon icon-plus1" /></button>
					</div>
					<p class={style.menuItemDataPrice} >R$: <span>	{props.item.price} </span></p>
					<div style="margin-top: 10px;">
						<label for="textarea" > Observações:</label>
						<input type="textarea" onChange={this.handleAddObservation} value={this.state.observation} style="width: 100%; height: 40px; padding: 8px; resize: none; border: 1px solid #ddd; border-radius: 8px;" />
					</div>
					<button class={style.menuItemDataOrder} onClick={this.handleOrderItem}>
						adicionar
					</button>
				</div>

			</div >
		);
	}
}

export default RestaurantMenuItem;