import React, { Component } from "react";
import { connect } from "react-redux";

import OrderItem from "./OrderItem.jsx";

import {
  updateCurrentOrder,
  setCurrentOrder,
  closeOrder
} from "../../../store/actions/orders";

import style from "./OrderDetails.module.css";

import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  circleButton: {
    backgroundColor: "rgb(255, 180, 106);",
    color: "#fff"
  },
  circleButtonContainer: {
    marginRight: 10,
    position: "relative"
  },
  confirmButton: {
    backgroundColor: "rgb(255, 180, 106);",
    color: "#fff",
    position: "relative",
    minHeight: 36,
    minWidth: 205
  },
  fabProgress: {
    position: "absolute",
    left: 0,
    color: green[500],
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    right: "calc(50% - 12px)"
  }
});

class OrderDetails extends Component {
  state = {
    success: false,
    loading: false
  };

  handleSetCurrentOrder = () => {
    if (
      this.props.orders.currentOrder &&
      this.props.orders.currentOrder.id === this.props.match.params.id
    ) {
      return false;
    }
    if (this.props.orders.history.length && this.props.match.params.id) {
      const currentOrder = this.props.orders.history.find(
        o => o.id === this.props.match.params.id
      );
      this.props.setCurrentOrder(currentOrder);
      // this.props.listenToOrderChanges(currentOrder.id)
    }
  };

  handleUpdateOrderItem(updatedItem) {
    const itemIndex = this.props.orders.currentOrder.items.findIndex(
      i => i._id === updatedItem._id
    );
    let updatedItems = [...this.props.orders.currentOrder.items];
    if (itemIndex !== -1) {
      updatedItems[itemIndex] = updatedItem;
    }

    const updatedTotalPrice = updatedItems
      .map(i => i.quantity * i.price)
      .reduce((a, b) => a + b, 0);
    this.props.updateCurrentOrder({
      ...this.props.orders.currentOrder,
      totalPrice: updatedTotalPrice,
      items: [...updatedItems]
    });
  }

  handleRemoveOrderItem(item) {
    const itemIndex = this.props.orders.currentOrder.items.findIndex(
      i => i._id === item._id && i.orderedDate === item.orderedDate
    );
    let updatedItems = [...this.props.orders.currentOrder.items];
    if (itemIndex !== -1) {
      updatedItems.splice(itemIndex, 1);
    }
    const updatedTotalPrice = updatedItems
      .map(i => i.quantity * i.price)
      .reduce((a, b) => a + b, 0);

    this.props.updateCurrentOrder({
      ...this.props.order,
      totalPrice: updatedTotalPrice,
      items: [...updatedItems]
    });
  }

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.props.closeOrder(this.props.orders.currentOrder.id).then(() => {
            this.setState({
              loading: false,
              success: true
            });
          });
        }
      );
    }
  };

  constructor(...args) {
    super(...args);
    this.handleUpdateOrderItem = this.handleUpdateOrderItem.bind(this);
    this.handleRemoveOrderItem = this.handleRemoveOrderItem.bind(this);
    this.handleSetCurrentOrder();
  }

  render() {
    const { loading } = this.state;
    const { classes } = this.props;

    return this.props.orders.currentOrder &&
      this.props.orders.currentOrder.id ? (
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

          {this.props.orders.currentOrder.items.map(i => (
            <OrderItem
              order={this.props.orders.currentOrder}
              key={i._id + i.orderedDate}
              item={i}
              handleUpdateOrderItem={this.handleUpdateOrderItem}
              handleRemoveOrderItem={this.handleRemoveOrderItem}
            />
          ))}
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
        <div className={classes.root}>
          <div className={classes.circleButtonContainer}>
            <Fab
              className={classes.circleButton}
              onClick={this.handleButtonClick}
              disabled={this.props.orders.currentOrder.status === "finalizada"}
            >
              <CheckIcon />
              {loading && (
                <CircularProgress size={58} className={classes.fabProgress} />
              )}
            </Fab>
          </div>

          <Button
            className={classes.confirmButton}
            variant="contained"
            disabled={
              this.props.orders.currentOrder.status === "finalizada" ||
              this.state.loading
            }
            onClick={this.handleButtonClick}
          >
            {this.props.orders.currentOrder.status === "finalizada" ? (
              "Pagamento Realizado"
            ) : this.state.loading ? (
              <CircularProgress size={24} className={classes.buttonProgress} />
            ) : (
              "Realizar Pagamento"
            )}
          </Button>
        </div>
      </div>
    ) : (
      <h1>Pedido não encontrado</h1>
    );
  }
}

const mapStateToProps = state => ({ orders: state.orders });

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {
      updateCurrentOrder,
      setCurrentOrder,
      closeOrder    
    }
  )(OrderDetails)
);
