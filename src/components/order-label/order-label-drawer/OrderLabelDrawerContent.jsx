import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'

// redux actions 
import { confirmOrder, updateCurrentOrder, clearCurrentOrder } from '../../../store/actions/orders';

// import style from '../styles/OrderLabelDrawerContent.module.css';
import OrderItem from '../../../routes/order/order-details/OrderItem';


const styles={
    root: {
        color: 'white',
        marginRight: 5
    }
};

const theme=createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            main: 'rgb(255, 180, 106)'
        }
    }
});

class OrderLabelDrawerContent extends Component {

    handleUpdateOrderItem=(updatedItem) => {
        const itemIndex=this.props.orders.currentOrder.items.findIndex(i => i._id===updatedItem._id);
        let updatedItems=[...this.props.orders.currentOrder.items];
        if (itemIndex!==-1) {
            updatedItems[itemIndex]=updatedItem;
        }
        if (updatedItems.length===0) {
            this.props.clearCurrentOrder();
            return false
        }
        const updatedTotalPrice=updatedItems.map(i => (i.quantity*i.price)).reduce((a, b) => (a+b), 0);
        this.props.updateCurrentOrder({
            ...this.props.orders.currentOrder,
            totalPrice: updatedTotalPrice,
            items: [...updatedItems]
        });
    }

    handleRemoveOrderItem=(item) => {
        const itemIndex=this.props.orders.currentOrder.items.findIndex(i => i._id===item._id&&i.orderedDate===item.orderedDate);
        let updatedItems=[...this.props.orders.currentOrder.items];
        if (itemIndex!==-1) {
            updatedItems.splice(itemIndex, 1);
        }
        if (updatedItems.length===0) {
            this.props.clearCurrentOrder();
            return false
        }
        const updatedTotalPrice=updatedItems.map(i => (i.quantity*i.price)).reduce((a, b) => (a+b), 0);

        this.props.updateCurrentOrder({
            ...this.props.order,
            totalPrice: updatedTotalPrice,
            items: [...updatedItems]
        });
    }

    render() {
        const { classes }=this.props;
        const ConfirmOrderButton=withRouter(({ history }) => (
            <Button variant="contained" color="primary" className={classes.root} onClick={() => {
                const toBeConfirmedOrder={
                    ...this.props.orders.currentOrder,
                    status: 'à confirmar'
                }
                this.props.confirmOrder(toBeConfirmedOrder).then(() => {
                    history.push(`/pedidos/${this.props.orders.currentOrder.id}`);
                });
            }}>
                Confirmar
            </Button>
        ))

        return (
            <div style={{ padding: 10 }}>
                <h1 style={{ textAlign: 'center' }}>Meu Pedido</h1>
                <div>
                    {this.props.orders.currentOrder.items.map(i =>
                        (
                            <OrderItem order={this.props.orders.currentOrder} key={i._id+i.orderedDate} item={i} handleUpdateOrderItem={this.handleUpdateOrderItem} handleRemoveOrderItem={this.handleRemoveOrderItem} />
                        )
                    )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MuiThemeProvider theme={theme}>
                        <ConfirmOrderButton />
                        <Button variant="contained" color="primary" className={classes.root} onClick={this.props.clearCurrentOrder}>
                            Limpar
                        </Button>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state) => ({ orders: state.orders })

export default withStyles(styles)(connect(mapStateToProps, { confirmOrder, updateCurrentOrder, clearCurrentOrder })(OrderLabelDrawerContent));