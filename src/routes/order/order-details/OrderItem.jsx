import React, { Component } from 'react';

import style from './OrderItem.module.css';

class OrderItem extends Component {

	state={
		editing: false,
		totalPrice: 0,
		editingQuantity: 0,
		editingObservation: ''
	}

	handleEdit() {
		if (this.state.editing) {
			if (this.state.editingQuantity>0) {
				const updatedItem={
					...this.props.item,
					quantity: this.state.editingQuantity,
					observation: this.state.editingObservation
				};
				this.props.handleUpdateOrderItem(updatedItem);
			}
			else {
				this.props.handleRemoveOrderItem(this.props.item);
			}
			this.setState({ editing: false });
		}
		else {
			this.setState({ editing: true });
		}
	}

	handleRemove() {
		if (this.state.editing) {
			this.setState({
				editing: false, editingQuantity: this.props.item.quantity,
				editingObservation: this.props.item.observation,
				totalPrice: this.props.item.price*this.props.item.quantity
			});
		}
		else {
			this.props.handleRemoveOrderItem(this.props.item);
		}
	}

	handleAdd() {
		const newQuantity=this.state.editingQuantity+1;
		const newPrice=this.props.item.price*newQuantity;
		this.setState({ editingQuantity: newQuantity, totalPrice: newPrice });
	}

	handleSubtract() {
		if (this.state.editingQuantity>=0) {
			const newQuantity=this.state.editingQuantity-1;
			const newPrice=this.props.item.price*newQuantity;
			this.setState({ editingQuantity: newQuantity, totalPrice: newPrice });
		}
	}

	handleEditObservation(event) {
		const observation=event.target.value;
		if (observation) {
			this.setState({ editingObservation: observation });
		}
	}

	constructor(...args) {
		super(...args);
		this.handleEdit=this.handleEdit.bind(this);
		this.handleRemove=this.handleRemove.bind(this);
		this.handleAdd=this.handleAdd.bind(this);
		this.handleSubtract=this.handleSubtract.bind(this);
		this.handleEditObservation=this.handleEditObservation.bind(this);
	}

	componentDidMount() {
		this.setState({
			editingQuantity: this.props.item.quantity,
			editingObservation: this.props.item.observation,
			totalPrice: this.props.item.price*this.props.item.quantity
		});
	}

	render() {
		return (
			<div>
				<div className={style.orderItemContainer}>
					<div className={style.orderItemEditContainer}>
						<button onClick={this.handleEdit} className={style.orderItemEditBtn+' transparent-btn-pressed'}> <i className={this.state.editing? 'icon icon-check text-success':'icon icon-edit'} /> </button>
						<button onClick={this.handleRemove} className={style.orderItemEditBtn+' transparent-btn-pressed'}> <i className={this.state.editing? 'icon icon-close text-danger':'icon icon-trash-o'} /> </button>
					</div>
					<div>
						<p style={{ display: 'flex', alignItems: 'center' }}>
							<span>{this.state.editingQuantity>0? this.state.editingQuantity:this.props.item.quantity}x</span>
							{
								this.state.editing? (
									<div>
										<button onClick={this.handleSubtract} className="transparent-btn-pressed" style={{ display: 'inline-block', marginLeft: 10, padding: 4, color: '#444', fontSize: 10 }} type="button"><i className="icon icon-minus1" /></button>
										<button onClick={this.handleAdd} className="transparent-btn-pressed" style={{ display: 'inline-block', marginLeft: 10, padding: 4, color: '#444', fontSize: 10 }} type="button"><i className="icon icon-plus1" /></button>
									</div>
								):null
							}
						</p>
						<p>{this.props.item.name}</p>
						<p>R$ {this.state.totalPrice} ( {this.state.editingQuantity} x {this.props.item.price} )</p>
						{
							this.state.editing? (
								<input onChange={this.handleEditObservation} value={this.state.editingObservation} type="textarea" placeholder="Observações" style={{ width: '100%', height: 40, padding: 8, marginTop: 10, resize: 'none', border: '1px solid #ddd', borderRadius: 8, outline: 0 }} />
							):this.props.item.observation? (
								<p> Observações: {this.props.item.observation}</p>
							):null
						}
					</div>
					{/* <button style="padding: 6px; border-radius: 6px;background: #216C2A;color: #fff;border: none;margin-top: 10px;	display: block;	width: 100%;" >
										Confirmar pedido
									</button> */}
				</div>
			</div>
		);
	}
}

export default OrderItem;