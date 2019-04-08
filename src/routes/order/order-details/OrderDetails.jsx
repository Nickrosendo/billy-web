import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrderItem from './OrderItem.jsx';

import { updateCurrentOrder, setCurrentOrder, closeOrder } from '../../../store/actions/orders';

import style from './OrderDetails.module.css';

import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';

const styles=theme => ({
	root: {
		display: 'flex',
		alignItems: 'center',
	},
	wrapper: {
		margin: theme.spacing.unit,
		position: 'relative',
	},
	buttonSuccess: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700],
		},
	},
	fabProgress: {
		color: green[500],
		position: 'absolute',
		top: -6,
		left: -6,
		zIndex: 1,
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
});


class OrderDetails extends Component {

	state={
		success: false,
		loading: false
	}

	handleSetCurrentOrder=() => {
		if (this.props.orders.currentOrder&&this.props.orders.currentOrder.id===this.props.match.params.id) {
			return false;
		}
		if (this.props.orders.history.length&&this.props.match.params.id) {
			const currentOrder=this.props.orders.history.find(o => o.id===this.props.match.params.id);
			this.props.setCurrentOrder(currentOrder);
		}
	}

	handleUpdateOrderItem(updatedItem) {

		const itemIndex=this.props.orders.currentOrder.items.findIndex(i => i._id===updatedItem._id);
		let updatedItems=[...this.props.orders.currentOrder.items];
		if (itemIndex!==-1) {
			updatedItems[itemIndex]=updatedItem;
		}

		const updatedTotalPrice=updatedItems.map(i => (i.quantity*i.price)).reduce((a, b) => (a+b), 0);
		console.log('updatedTotalPrice: ', updatedTotalPrice);
		this.props.updateCurrentOrder({
			...this.props.orders.currentOrder,
			totalPrice: updatedTotalPrice,
			items: [...updatedItems]
		});
	}

	handleRemoveOrderItem(item) {
		const itemIndex=this.props.orders.currentOrder.items.findIndex(i => i._id===item._id&&i.orderedDate===item.orderedDate);
		let updatedItems=[...this.props.orders.currentOrder.items];
		if (itemIndex!==-1) {
			updatedItems.splice(itemIndex, 1);
		}
		const updatedTotalPrice=updatedItems.map(i => (i.quantity*i.price)).reduce((a, b) => (a+b), 0);

		this.props.updateCurrentOrder({
			...this.props.order,
			totalPrice: updatedTotalPrice,
			items: [...updatedItems]
		});
	}

	handleButtonClick=() => {
		if (!this.state.loading) {
			this.setState(
				{
					success: false,
					loading: true,
				},
				() => {
					this.props.closeOrder(this.props.orders.currentOrder.id).then(() => {
						this.setState({
							loading: false,
							success: true,
						});
					})
				},
			);
		}
	};

	constructor(...args) {
		super(...args);
		this.handleUpdateOrderItem=this.handleUpdateOrderItem.bind(this);
		this.handleRemoveOrderItem=this.handleRemoveOrderItem.bind(this);
		this.handleSetCurrentOrder();
	}

	render() {
		const { loading, success }=this.state;
		const { classes }=this.props;

		return this.props.orders.currentOrder&&this.props.orders.currentOrder.id? (
			<div>
				{/* <h1 className="text-center"> Detalhes do pedido</h1> */}
				<h1 className={style.orderStatus}>
					{this.props.orders.currentOrder.status}
				</h1>

				<div className={style.orderDetailsOrderContainer}>
					{/* {
						this.props.orders.currentOrder.status !== 'finalizada' ? (
							<Link className={style.orderDetailsAddMoreItensBtn} to={`/restaurantes/${this.props.orders.currentOrder.restaurantId}`}>
								Adicionar mais itens
					</Link>
						) : null
					} */}

					{this.props.orders.currentOrder.items.map(i =>
						(
							<OrderItem order={this.props.orders.currentOrder} key={i._id+i.orderedDate} item={i} handleUpdateOrderItem={this.handleUpdateOrderItem} handleRemoveOrderItem={this.handleRemoveOrderItem} />
						)
					)}
					<p className={style.orderDetailsPaymentTitle}> Pagamento </p>
					<div className={style.orderDetailsPaymentContainer}>
						<p className={style.orderDeatilsContentField}>
							<span>Subtotal: </span>
							<span>R$ {this.props.orders.currentOrder.totalPrice}</span>
						</p>
						<p className={style.orderDeatilsContentField}>
							<span>Total: </span>
							<span>R$ {this.props.orders.currentOrder.totalPrice}</span>
						</p>
					</div>
				</div>
				{
					this.props.orders.currentOrder.status==='finalizada'? null:(
						<button className={style.orderDetailsPaymentBtn} onClick={this.handleCloseOrder}>
							Realizar pagamento
				    </button>
					)

				}
				<div className={classes.root}>
					<div className={classes.wrapper}>
						<Fab color="primary" onClick={this.handleButtonClick}>
							{this.props.orders.currentOrder.status==='finalizada'? <CheckIcon />:<SaveIcon />}
						</Fab>
						{loading&&<CircularProgress size={68} className={classes.fabProgress} />}
					</div>
					<div className={classes.wrapper}>
						<Button
							variant="contained"
							color="primary"
							disabled={this.props.orders.currentOrder.status==='finalizada'}
							onClick={this.handleButtonClick}
						>
							{this.props.orders.currentOrder.status==='finalizada'? 'Pagamento Realizado' :'Realizar Pagamento'}
          </Button>
						{loading&&<CircularProgress size={24} className={classes.buttonProgress} />}
					</div>
				</div>
			</div>
		):(
				<h1>Pedido não encontrado</h1>
			);
	}
}

const mapStateToProps=(state) => ({ orders: state.orders })

export default withStyles(styles)(connect(mapStateToProps, {
	updateCurrentOrder,
	setCurrentOrder,
	closeOrder
})(OrderDetails));
