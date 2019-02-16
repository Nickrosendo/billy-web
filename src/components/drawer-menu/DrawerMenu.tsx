import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { connect } from 'react-redux';

import LoggedInItems from './LoggedInItems';
import LoggedOutItems from './LoggedOutItems';

import Root from '../../store/reducers';

interface IProps extends WithStyles<typeof styles> {
  open: boolean,
  toggleDrawer: any,
  firebase: {
    auth: {
      uid: any
    }
  }
}

const styles = {
  list: {
    width: 250,
  }
};

class SwipeableTemporaryDrawer extends React.Component<IProps> {

  render() {
    console.log('drawer props: ', this.props);
    const { firebase } = this.props;
    const items = firebase.auth.uid ? <LoggedInItems /> : <LoggedOutItems />;
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

export default withStyles(styles)(connect(mapStateToProps)(SwipeableTemporaryDrawer));