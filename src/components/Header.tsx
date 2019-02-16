import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


interface IProps extends WithStyles<typeof styles> {
  toggleDrawer: any
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: 'rgb(255, 180, 106)'
    }
  }
});

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 20,
    marginRight: -12,
    color: '#fff',
  },
};

class MenuAppBar extends React.Component<IProps> {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <Grid
                justify="flex-end"
                container              
              >
                <Grid item>
                  <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.props.toggleDrawer}>
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(MenuAppBar);