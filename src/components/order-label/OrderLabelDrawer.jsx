
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import style from './OrderLabel.module.css';
// const mapStateToProps = (state) => ({ orders: state.orders })




const styles = {
    list: {
        width: 'auto',
        height: 250,
        paddingLeft: 20,
        paddingright: 20
    },
    paper: {
        top: '25%',
        left: 20,
        right: 20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    }
};

class OrderLabelDrawer extends Component {

    render() {
        const { orders, classes } = this.props;
        console.log('clsses: ', this.props);
        return (
            <SwipeableDrawer
                anchor="bottom"
                open={this.props.open}
                onClose={this.props.closeDrawer}
                onOpen={this.props.openDrawer}
                className={classes.list}
            >
                <div className={classes.paper}>
                    Pedido
                </div>
            </SwipeableDrawer>
        );
    }
};

export default withStyles(styles)(OrderLabelDrawer);