import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import LoggedInItems from './LoggedInItems';

interface IProps extends WithStyles<typeof styles> {
  open: boolean,
  toggleDrawer: any
}

const styles = {
  list: {
    width: 250,
  }
};

class SwipeableTemporaryDrawer extends React.Component<IProps> {
  state = {
    left: false,
  };

  render() {

    const { classes } = this.props;

    return (
      <div>
        <SwipeableDrawer
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
            <LoggedInItems />
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(SwipeableTemporaryDrawer);