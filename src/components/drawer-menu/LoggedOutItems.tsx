import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';
import PersonAdd from '@material-ui/icons/PersonAdd';

interface IProps extends WithStyles<typeof styles> { }

const styles = {
	list: {
		width: 250,
	}
};

const LoggedOutItems: React.SFC<IProps> = (props) => {
	const { classes } = props;

	const topList = [
		{
			text: 'Início',
			icon: <HomeIcon />
		},
		{
			text: 'Como pedir',
			icon: <HelpIcon />
		},
		{
			text: 'Cadastrar',
			icon: <PersonAdd />
        },
        {
            text: 'Entrar',
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
		</div>
	)
}

export default withStyles(styles)(LoggedOutItems);