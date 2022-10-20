import { AppBar, Avatar, Badge, makeStyles, Toolbar, Typography, Tooltip, Box } from '@material-ui/core';

import { Mail, Notifications, Book } from '@material-ui/icons';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	logoLg: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			alignItems: 'center'
		}
	},
	logoSm: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	input: {
		color: 'white',
		marginLeft: theme.spacing(1)
	},
	cancel: {
		[theme.breakpoints.up('sm')]: {
			display: 'none',
			position: 'absolute',
			right: 10
		}
	},
	icons: {
		alignItems: 'center',
		display: (props) => (props.open ? 'none' : 'flex')
	},
	brand: {
		marginRight: theme.spacing(1)
	},
	badge: {
		marginRight: theme.spacing(2)
	},
	account: {
		display: 'flex',
		alignItems: 'center'
	},
	username: {
		marginRight: theme.spacing(1)
	}
}));

const Navbar = () => {
	const classes = useStyles();
	return (
		<AppBar position="fixed">
			<Toolbar className={classes.toolbar}>
				<Link href="/">
					<Typography variant="h6" className={classes.logoLg}>
						<Book className={classes.brand} /> News App
					</Typography>
				</Link>
				<Link href="/">
					<Typography variant="h6" className={classes.logoSm}>
						<Book className={classes.brand} /> News App
					</Typography>
				</Link>

				<div className={classes.icons}>
					<Badge overlap="rectangular" badgeContent={4} color="secondary" className={classes.badge}>
						<Mail />
					</Badge>
					<Badge overlap="rectangular" badgeContent={2} color="secondary" className={classes.badge}>
						<Notifications />
					</Badge>
					<Tooltip title="Muhamad Sobari" aria-label="add">
						<Box className={classes.account}>
							<span className={classes.username}>Muhamad Sobari</span>
							<Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQF0vJCaJ2mvZw/profile-displayphoto-shrink_800_800/0/1663286208545?e=1671667200&v=beta&t=fcG-akZnx-1v9EIMF6MzpkkgAaa6wuTCnZ5bRbj6S4k" />
						</Box>
					</Tooltip>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
