import React from "react";
import style from "../styles/OrderLabelBanner.module.css";

const OrderLabelBanner = (props) => {
  return props.open ? (
    <div
      className={style.orderLabelContainer}
      onClick={props.openOrderLabelDrawer}
    >
      {/* <Link className={style.orderLabelContainer} to={`/pedidos/${orders.currentOrder.id}`}></Link> */}
      <i className="icon icon-bell" style={{ fontSize: 20 }} />
      <span style={{ textTransform: "capitalize" }}> Meu pedido</span>
      <span className={style.orderLabelPriceContainer}>
        {" "}
        R$ {props.currentOrder.totalPrice}
      </span>
    </div>
  ) : null;
};

export default OrderLabelBanner;
