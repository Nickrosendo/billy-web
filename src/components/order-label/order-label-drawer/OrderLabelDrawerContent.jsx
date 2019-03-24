import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'

// redux actions 
import { confirmOrder } from '../../../store/actions/orders';

// import style from '../styles/OrderLabelDrawerContent.module.css';
import OrderItem from '../../../routes/order/order-details/OrderItem';


const styles={
    root: {
        background: 'rgb(255, 180, 106)',
        marginRight: 5
    }
};

class OrderLabelDrawerContent extends Component {

    handleUpdateOrderItem=() => {

    }

    handleRemoveOrderItem=() => {

    }

    render() {
        const { classes }=this.props;
        const ConfirmOrderButton=withRouter(({ history }) => (
            <Button variant="contained" color="primary" className={classes.root} onClick={ () => { 
                const toBeConfirmedOrder = {
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
                    <ConfirmOrderButton />
                    <Button variant="contained" color="primary" className={classes.root}>
                        Cancelar
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state) => ({ orders: state.orders })

export default withStyles(styles)(connect(mapStateToProps, { confirmOrder })(OrderLabelDrawerContent));