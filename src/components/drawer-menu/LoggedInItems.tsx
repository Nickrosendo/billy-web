import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SecurityIcon from '@material-ui/icons/Security';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


interface IProps extends WithStyles<typeof styles> {
	signOut: Function,
	history? : Array<any>
}

const styles = {
	list: {
		width: 250,
	}
};

const LoggedInItems: React.SFC<IProps> = (props) => {
	const { classes } = props;

	const handleSignout = () => {
    props.signOut();
  }

	const topList = [
		{
			text: 'Início',
			route: '/restaurantes',
			icon: <HomeIcon />
		},
		{
			text: 'Meus pedidos',
			route: '/pedidos',
			icon: <HistoryIcon />
		},
		{
			text: 'Como pedir',
			route: '/ajuda',
			icon: <HelpIcon />
		}
	];

	const bottomList = [
		{
			text: 'Perfil',
			route: '/perfil',
			icon: <AccountCircleIcon />
		},
		{
			text: 'Segurança',
			route: '/seguranca',
			icon: <SecurityIcon />
		},
		{
			text: 'Sair',
			clickHandler: handleSignout,
			icon: <ExitToAppIcon />
		}
	];

	return (
		<div>
			<List className={classes.list}>
				{topList.map(({ text, icon, route }) => (
					<Link style={{ textDecoration: 'none' }} to={route} key={text} replace={true}>
						<ListItem button >
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List>
				{bottomList.map(({ text, icon, route, clickHandler }) => {
					return route ? (
						<Link style={{ textDecoration: 'none' }} to={route} key={text} replace={true}>
							<ListItem button >
								<ListItemIcon>{icon}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						</Link>
					) : (
							<ListItem button onClick={clickHandler} key={text}>
								<ListItemIcon>{icon}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						)
				})}
			</List>
		</div>
	)
}

export default withStyles(styles)(LoggedInItems);