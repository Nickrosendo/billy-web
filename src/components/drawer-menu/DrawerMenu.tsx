import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { connect } from 'react-redux';

import { signOut } from '../../store/actions/auth';
import { openDrawer, closeDrawer } from '../../store/actions/ui';

import LoggedInItems from './LoggedInItems';
import LoggedOutItems from './LoggedOutItems';

interface IProps extends WithStyles<typeof styles> {
  firebase: {
    auth: {
      uid: any
    }
  },
  ui: {
    drawerOpen: boolean
  }
  signOut: Function,
  openDrawer: any,
  closeDrawer: any,
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
          open={this.props.ui.drawerOpen}
          onClose={this.props.closeDrawer}
          onOpen={this.props.openDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.closeDrawer}
            onKeyDown={this.props.closeDrawer}
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
  },
  ui: {
    drawerOpen: boolean
  }
}

const mapStateToProps = (state: mappedState) => ({ firebase: state.firebase, ui: state.ui })

export default withStyles(styles)(connect(mapStateToProps, {
  signOut,
  openDrawer,
  closeDrawer
})(SwipeableTemporaryDrawer));