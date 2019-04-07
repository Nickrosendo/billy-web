import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
		width: 100,
		height: 100,
		marginLeft: '40%',
		marginTop: 200,
		color: '#ffb46a',
		fontSize: 25
  },
});

function Loading(props) {
	const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

export default withStyles(styles)(Loading);
