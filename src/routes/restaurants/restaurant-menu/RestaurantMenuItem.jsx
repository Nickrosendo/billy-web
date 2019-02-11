import { h, Component } from 'preact';
import style from './style';

class RestaurantMenuItem extends Component {

	state={
		quantity: 1,
		observation: '',
		showObservation: false
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

	showObservation=() => {
		this.setState({ showObservation: true });
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
			<div class={style.verticalListItem} >
				<img src={props.item.img} />
				<div class={style.itemContent}>
					<p>
						{props.item.name}
					</p>
					<div style="display: flex; justify-content: space-between; align-items: center;">
						<p style="color: rgb(255, 180, 106);">R$: {props.item.price*this.state.quantity} </p>
						<div class={style.orderItemQuantityContainer}>
							<button style="display: inline-block; vertical-align: middle;" class={style.orderItemQuantityBtn+' transparent-btn-pressed'} onClick={this.handleSubtract} type="button"><i class="icon icon-minus1" /></button>
							<input style="display: inline-block; vertical-align: middle;" class={style.orderItemInput} onChange={this.handleManualChange} value={this.state.quantity} id="qnt" type="number" />
							<button style="display: inline-block; vertical-align: middle;" class={style.orderItemQuantityBtn+' transparent-btn-pressed'} onClick={this.handleAdd} type="button"><i class="icon icon-plus1" /></button>
						</div>
					</div>
					{/* <div>
						{
							this.state.showObservation?
								(
									<input placeholder="Observação" type="textarea" onChange={this.handleAddObservation} value={this.state.observation} style="width: 100%; height: 40px; padding: 8px; resize: none; border: 1px solid #ddd; border-radius: 8px;  margin-top: 5px;" />
								):
								(
									<button type="button" style="color: rgb(255, 180, 106); border: none; background: transparent; outline: 0;" onClick={this.showObservation}>
										<span style="vertical-align: middle; ">Observação <span class="icon-sticky-note-o" /></span>
									</button>
								)
						}
					</div> */}
					<div class="text-left" style="display: flex; align-items: center; font-size: 1em;">
						<p class={style.menuItemDataPrice} style="margin-right: 5px;" onClick={this.handleOrderItem}>Adicionar</p>
						<p class={style.menuItemDataPrice} >Detalhes</p>
					</div>
				</div>
			</div>
			// <div class={style.menuItemContainer}>
			// 	<p class={style.menuItemName}>
			// 		{props.item.name}
			// 	</p>
			// 	<div class={style.menuItemData}>
			// 		<img class={style.menuItemImg} src={props.item.img} />
			// 		<div class={style.menuItemDataIngredients}>
			// 			{props.item.ingredients.map(i => (
			// 				<span> {i+', '} </span>
			// 			))}
			// 		</div>
			// 	</div>
			// 	<div class={style.orderItemContainer}>
			// 		<div class={style.orderItemQuantityContainer}>
			// 			<button class={style.orderItemQuantityBtn+' transparent-btn-pressed'} onClick={this.handleSubtract} type="button"><i class="icon icon-minus1" /></button>
			// 			<input class={style.orderItemInput} onChange={this.handleManualChange} value={this.state.quantity} id="qnt" type="number" />
			// 			<button class={style.orderItemQuantityBtn+' transparent-btn-pressed'} onClick={this.handleAdd} type="button"><i class="icon icon-plus1" /></button>
			// 		</div>
			// 		<p class={style.menuItemDataPrice} >R$: <span>	{props.item.price*this.state.quantity} </span></p>
			// 		<div style="margin-top: 10px;">
			// 			<input type="textarea" onChange={this.handleAddObservation} value={this.state.observation} style="width: 100%; height: 40px; padding: 8px; resize: none; border: 1px solid #ddd; border-radius: 8px;" />
			// 		</div>
			// 		<button class={style.menuItemDataOrder} onClick={this.handleOrderItem}>
			// 			adicionar
			// 		</button>
			// 	</div>

			// </div >
		);
	}
}

export default RestaurantMenuItem;