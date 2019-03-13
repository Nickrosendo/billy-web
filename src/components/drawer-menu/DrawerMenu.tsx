import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { connect } from 'react-redux';

import { signOut } from '../../store/actions/auth';

import LoggedInItems from './LoggedInItems';
import LoggedOutItems from './LoggedOutItems';

interface IProps extends WithStyles<typeof styles> {
  open: boolean,
  toggleDrawer: any,
  firebase: {
    auth: {
      uid: any
    }
  },
  signOut: Function,
  history?: Array<any>
}

const styles = {
  list: {
    width: 250,
  }
};

class SwipeableTemporaryDrawer extends React.Component<IProps> {

  handleSignout = () => {
    this.props.signOut();
    if(this.props.history) 
    this.props.history.push('/');
  }

  render() {
    const { firebase } = this.props;
    const items = firebase.auth.uid ? <LoggedInItems signOut={this.handleSignout} /> : <LoggedOutItems />;
    return (
      <div>
        <SwipeableDrawer
          anchor="right"
          open={this.props.open}
          onClose={this.props.toggleDrawer}
          onOpen={this.props.toggleDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleDrawer}
            onKeyDown={this.props.toggleDrawer}
          >
            { items }
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

interface mappedState {
  firebase: {
    auth: {
      uid: any
    }
  }
}

const mapStateToProps = (state: mappedState) => ({ firebase: state.firebase })

export default withStyles(styles)(connect(mapStateToProps, {
  signOut
})(SwipeableTemporaryDrawer));