import { h, Component } from 'preact';

import style from './style.css';

class OrderItem extends Component {

	state = {
		editing: false,
		totalPrice: 0,
		editingQuantity: 0,
		editingObservation: ''
	}

	handleEdit() {
		if (this.state.editing) {
			const updatedItem = {
				...this.props.item,
				quantity: this.state.editingQuantity,
				observation: this.state.editingObservation
			};
			this.props.handleUpdateOrderItem(updatedItem);
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
				totalPrice: this.props.item.price * this.props.item.quantity
			});
		}
		else {
			this.props.handleRemoveOrderItem(this.props.item);
		}
	}

	handleAdd() {
		const newQuantity = this.state.editingQuantity + 1;
		const newPrice = this.props.item.price * newQuantity;
		this.setState({ editingQuantity: newQuantity, totalPrice: newPrice });
	}

	handleSubtract() {
		if (this.state.editingQuantity > 1) {
			const newQuantity = this.state.editingQuantity - 1;
			const newPrice = this.props.item.price * newQuantity;
			this.setState({ editingQuantity: newQuantity, totalPrice: newPrice });
		}
	}

	handleEditObservation(event) {
		const observation = event.target.value;
		if (observation) {
			this.setState({ editingObservation: observation });
		}
	}

	constructor(...args) {
		super(...args);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleSubtract = this.handleSubtract.bind(this);
		this.handleEditObservation = this.handleEditObservation.bind(this);

		this.setState({
			editingQuantity: this.props.item.quantity,
			editingObservation: this.props.item.observation,
			totalPrice: this.props.item.price * this.props.item.quantity
		});
	}

	render() {
		return (
			<div>
				<div class={style.orderItemContainer}>
					<div class={style.orderItemEditContainer}>
						<button onClick={this.handleEdit} class={style.orderItemEditBtn + ' transparent-btn-pressed'}> <i class={this.state.editing ? 'icon icon-check text-success' : 'icon icon-pencil1'} /> </button>
						<button onClick={this.handleRemove} class={style.orderItemEditBtn + ' transparent-btn-pressed'}> <i class={this.state.editing ? 'icon icon-close text-danger' : 'icon icon-bin'} /> </button>
					</div>
					<div>
						<p style="display: flex; align-items: center;">
							<span>{this.state.editingQuantity > 0 ? this.state.editingQuantity : this.props.item.quantity}x</span>
							{
								this.state.editing ? (
									<div>
										<button onClick={this.handleSubtract} class="transparent-btn-pressed" style="display: inline-block; margin-left: 10px; padding: 4px; color: #444; font-size: 10px;" type="button"><i class="icon icon-minus" /></button>
										<button onClick={this.handleAdd} class="transparent-btn-pressed" style="display: inline-block; margin-left: 10px; padding: 4px; color: #444;	font-size: 10px;" type="button"><i class="icon icon-plus" /></button>
									</div>
								) : null
							}
						</p>
						<p>{this.props.item.name}</p>
						<p>R$ {this.state.totalPrice} ( {this.state.editingQuantity} x {this.props.item.price} )</p>
						{
							this.state.editing ? (
								<input onChange={this.handleEditObservation} value={this.state.editingObservation} type="textarea" placeholder="Observações" style="width: 100%; height: 40px; padding: 8px; margin-top: 10px; resize: none; border: 1px solid #ddd; border-radius: 8px; outline: 0;" />
							) : this.props.item.observation ? (
								<p> Observações: {this.props.item.observation}</p>
							) : null
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