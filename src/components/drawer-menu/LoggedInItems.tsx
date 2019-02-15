import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SecurityIcon from '@material-ui/icons/Security';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


interface IProps extends WithStyles<typeof styles> { }

const styles = {
	list: {
		width: 250,
	}
};

const LoggedInItems: React.SFC<IProps> = (props) => {
	const { classes } = props;

	const topList = [
		{
			text: 'Início',
			icon: <HomeIcon />
		},
		{
			text: 'Meus pedidos',
			icon: <HistoryIcon />
		},
		{
			text: 'Como pedir',
			icon: <HelpIcon />
		}
	];

	const bottomList = [
		{
			text: 'Perfil',
			icon: <AccountCircleIcon />
		},
		{
			text: 'Segurança',
			icon: <SecurityIcon />
		},
		{
			text: 'Sair',
			icon: <ExitToAppIcon />
		}
	];

	return (
		<div>
			<List className={classes.list}>
				{topList.map(({ text, icon }) => (
					<ListItem button key={text}>
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{bottomList.map(({ text, icon }) => (
					<ListItem button key={text}>
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	)
}

export default withStyles(styles)(LoggedInItems);