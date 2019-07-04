import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import style from './RestaurantMenuItem.module.css';


const styles = {
	root: {
		color: 'white',
		marginRight: 5,
		width: '100%'
	}
};

const theme = createMuiTheme({
	typography: {
		useNextVariants: true
	},
	palette: {
		primary: {
			main: 'rgb(255, 180, 106)'
		}
	}
});


interface IProps extends WithStyles<typeof styles> {
	item: {
		img: string,
		name: String,
		price: number
	},
	handleAddOrderItem: Function
}

interface IState {
	quantity: Number,
	observation: string,
	showObservation: Boolean
}

class RestaurantMenuItem extends Component<IProps, IState> {

	state = {
		quantity: 1,
		observation: '',
		showObservation: false
	}

	handleOrderItem = () => {
		const orderItem = {
			...this.props.item,
			quantity: this.state.quantity,
			observation: this.state.observation,
			orderedDate: new Date(),
			status: 'à confirmar'
		};
		this.props.handleAddOrderItem(orderItem);
	}

	handleAdd = () => {
		this.setState({ quantity: this.state.quantity + 1 });
	}

	handleSubtract = () => {
		if (this.state.quantity > 1)
			this.setState({ quantity: this.state.quantity - 1 });
	}

	showObservation = () => {
		this.setState({ showObservation: true });
	}


	handleManualChange = (event: React.FormEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget;
		if (parseInt(value) !== NaN && parseInt(value) < 1) {
			this.setState({ quantity: 1 });
		}
		else {
			this.setState({ quantity: parseInt(value) });
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={style.verticalListItem} >
				<img src={this.props.item.img} />
				<div className={style.itemContent}>
					<p>
						{this.props.item.name}
					</p>
					<div className={style.itemContentData} >
						<p>R$: {this.props.item.price * this.state.quantity} </p>
						<div className={style.orderItemQuantityContainer}>
							<button onClick={this.handleSubtract} className={style.orderItemQuantityBtn + ' transparent-btn-pressed'} type="button"><i className="icon icon-minus1" /></button>
							<input className={style.orderItemInput} value={this.state.quantity} id="qnt" type="number" onChange={this.handleManualChange} />
							<button onClick={this.handleAdd} className={style.orderItemQuantityBtn + ' transparent-btn-pressed'} type="button"><i className="icon icon-plus1" /></button>
						</div>
					</div>

					<div className={style.orderItemActionsContainer} >
						<MuiThemeProvider theme={theme}>
							<Button variant="contained" color="primary" className={classes.root} onClick={this.handleOrderItem}>
								Adicionar
              </Button>
						</MuiThemeProvider>
					</div>
				</div>
			</div>

		);
	}
}

export default withStyles(styles)(RestaurantMenuItem);