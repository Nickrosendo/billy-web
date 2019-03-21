
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
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '15%',
        height: '100%',
        outline: 0
    }
};

class OrderLabelDrawer extends Component {

    render() {
        const { classes } = this.props;
        console.log('clsses: ', this.props);
        return (
            <SwipeableDrawer
                anchor="bottom"
                open={this.props.open}
                onClose={this.props.toggleDrawer}
                onOpen={this.props.toggleDrawer}
                PaperProps={{ className: classes.paper }}
            >
                <div>
                    Pedido
                </div>
            </SwipeableDrawer>
        );
    }
};

export default withStyles(styles)(OrderLabelDrawer);