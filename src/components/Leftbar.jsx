import { Container, makeStyles, Typography,Divider } from '@material-ui/core';
import {
	Bookmark,
	List,
	ExitToApp,
	Home,
	Settings,
} from '@material-ui/icons';
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
	container: {
		height: '100vh',
		color: 'white',
		paddingTop: theme.spacing(11),
		backgroundColor: theme.palette.primary.main,
		position: 'sticky',
		top: 0,
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.up('sm')]: {
			backgroundColor: 'white',
			color: '#555',
			border: '1px solid #ece7e7'
		},
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center',
		}
	},
	item: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: theme.spacing(4),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(3),
			cursor: 'pointer'
		}
	},
	icon: {
		marginRight: theme.spacing(1),
	},
	text: {
		fontWeight: 500,
		[theme.breakpoints.down('md')]:{
			display:'none',
		}
	},
	divider:{
		marginBottom:theme.spacing(2),
	},
	copyright: {
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	}
}));


function Copyright() {
	const classes = useStyles();
	return (
	  <Typography variant="body2" color="textSecondary" className={classes.copyright}>
		Copyright © Muhamad Sobari {new Date().getFullYear()}
	  </Typography>
	);
  }

const Leftbar = () => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<Link href='/'>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography className={classes.text}>Homepage</Typography>
			</div>
			</Link>

			<div className={classes.item}>
				<List className={classes.icon} />
				<Typography className={classes.text}>Lists</Typography>
			</div>
			<div className={classes.item}>
				<Bookmark className={classes.icon} />
				<Typography className={classes.text}>Collections</Typography>
			</div>
			<div className={classes.item}>
				<Settings className={classes.icon} />
				<Typography className={classes.text}>Settings</Typography>
			</div>
			<div className={classes.item}>
				<ExitToApp className={classes.icon} />
				<Typography className={classes.text}>Logout</Typography>
			</div>
			<Divider className={classes.divider}/>
			<Copyright/>
		</Container>
	);
};

export default Leftbar;
