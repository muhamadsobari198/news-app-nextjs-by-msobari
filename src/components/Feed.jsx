import React, { useState, useEffect } from 'react';
import {
	Container,
	makeStyles,
	Button,
	Grid,
	Tooltip,
	CircularProgress,
	Box,
	Typography,
	Fab
} from '@material-ui/core';
import axios from 'axios';
import Post from './Post';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10)
	},
	fabLeft: {
		position: 'fixed',
		bottom: 60,
		left: '20%'
	},
	fabRight: {
		position: 'fixed',
		bottom: 60,
		right: '20%',
		[theme.breakpoints.down('sm')]: {
			right: '5%'
		}
	},
	circullar: {
		width: '100%',
		height: '60vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 22,
		fontWeight: 500,
		color: '#555',
		marginBottom: theme.spacing(2)
	}
}));

const Feed = () => {
	const classes = useStyles();
	const [ period, setPeriod ] = useState(1);
	const [ loading, setLoading ] = useState(false);
	const [ articles, setArticles ] = useState([]);

	useEffect(
		() => {
			const getMostPopularArticles = async (section) => {
				setLoading(true);

				setTimeout(async () => {
					const res = await axios.get(
						`https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=BbG6SkAuBg5dyHnWtQ3J14dkPw9GVQgF`
					);
					setArticles(res.data.results);
					setLoading(false);
				}, 2000);
			};

			getMostPopularArticles();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		},
		[ period ]
	);

	const handleChangePeriod = (type) => {
		if (type === 'next') {
			if (period === 1) {
				setPeriod(7);
			} else if (period === 7) {
				setPeriod(30);
			}
		} else {
			if (period === 7) {
				setPeriod(1);
			} else if (period === 30) {
				setPeriod(7);
			}
		}
	};

	const ButtonPrev = () => {
		if (period !== 1) {
			return (
				<Tooltip title="Previous News" aria-label="add" onClick={() => handleChangePeriod('prev')}>
					<Fab color="primary" className={classes.fabLeft} variant="contained">
						<ArrowBack />
					</Fab>
				</Tooltip>
			);
		}
		return null;
	};

	const ButtonNext = () => {
		if (period !== 30) {
			return (
				<Tooltip title="Next News" aria-label="add" onClick={() => handleChangePeriod('next')}>
					<Fab color="primary" className={classes.fabRight} variant="contained">
						<ArrowForward />
					</Fab>
				</Tooltip>
			);
		}
		return null;
	};

	const Loading = () => {
		return (
			loading && (
				<Box className={classes.circullar}>
					<CircularProgress color="primary" />
				</Box>
			)
		);
	};

	const ButtonPrevNext = () => {
		if (!loading || period !== 1) {
			return (
				<React.Fragment>
					<ButtonPrev />
					<ButtonNext />
				</React.Fragment>
			);
		}
		return null;
	};

	const Articles = () => {
		if (!loading) {
			if (articles.length) {
				return articles.map((article, idx) => {
					return (
						<Grid item xs={12} sm={6} md={6} lg={4} key={idx}>
							<Post data={article} />
						</Grid>
					);
				});
			} else {
				return <h1> Oops, tidak ada data !</h1>;
			}
		}
		return null;
	};

	return (
		<Container className={classes.container}>
			<Typography className={classes.title}>Most Popular</Typography>
			<Grid container spacing={3}>
				<Loading />
				<Articles />
			</Grid>
			<ButtonPrevNext />
		</Container>
	);
};

export default Feed;
