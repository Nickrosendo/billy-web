import React, { Component } from 'react';
import style from './RestaurantMenu.module.css';

interface IProps {
	item: {
		img: string,
		name: String,
		price: number
	}
}

interface IState {
	quantity: Number,
	observation: string,
	showObservation: Boolean
}

class RestaurantMenuItem extends Component<IProps, IState> {

	state={
		quantity: 1,
		observation: '',
		showObservation: false
	}

	// handleOrderItem() {
	// 	const orderItem={
	// 		...this.props.item,
	// 		quantity: this.state.quantity,
	// 		observation: this.state.observation,
	// 		orderedDate: new Date(),
	// 		status: 'à confirmar'
	// 	};
	// 	this.props.handleAddOrderItem(orderItem);
	// }

	// handleAdd() {
	// 	this.setState({ quantity: this.state.quantity+1 });
	// }

	// showObservation=() => {
	// 	this.setState({ showObservation: true });
	// }

	// handleSubtract() {
	// 	if (this.state.quantity>1)
	// 		this.setState({ quantity: this.state.quantity-1 });
	// }

	// handleManualChange(event) {
	// 	const value=event.target.value;
	// 	if (value<1) {
	// 		this.setState({ quantity: 1 });
	// 	}
	// 	else {
	// 		this.setState({ quantity: value });
	// 	}
	// }

	// handleAddObservation(event) {
	// 	const observation=event.target.value;
	// 	if (observation) {
	// 		this.setState({ observation });
	// 	}
	// }

	// constructor(...args) {
	// 	super(...args);
	// 	this.handleOrderItem=this.handleOrderItem.bind(this);
	// 	this.handleAdd=this.handleAdd.bind(this);
	// 	this.handleSubtract=this.handleSubtract.bind(this);
	// 	this.handleManualChange=this.handleManualChange.bind(this);
	// 	this.handleAddObservation=this.handleAddObservation.bind(this);
	// }

	render() {
		return (
			<div className={style.verticalListItem} >
				<img src={this.props.item.img} />
				<div className={style.itemContent}>
					<p>
						{this.props.item.name}
					</p>
					<div className={style.itemContentData} >
						<p>R$: {this.props.item.price*this.state.quantity} </p>
						<div className={style.orderItemQuantityContainer}>
							<button className={style.orderItemQuantityBtn+' transparent-btn-pressed'}  type="button"><i className="icon icon-minus1" /></button>
							<input  className={style.orderItemInput} value={this.state.quantity} id="qnt" type="number" />
							<button className={style.orderItemQuantityBtn+' transparent-btn-pressed'}  type="button"><i className="icon icon-plus1" /></button>
						</div>
					</div>
				
					<div className={style.orderItemActionsContainer + 'text-left'} >
						<p className={style.menuItemDataPrice} style={{marginRight: 5 }} >Adicionar</p>
						<p className={style.menuItemDataPrice} >Detalhes</p>
					</div>
				</div>
			</div>

		);
	}
}

export default RestaurantMenuItem;