import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { _getArticleById } from '../../src/redux/apiCalls';

import {
	Container,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
	Tooltip,
	Fab
} from '@material-ui/core';

import { ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10)
	},
	card: {
		marginBottom: theme.spacing(5)
	},
	media: {
		height: 150,
		[theme.breakpoints.down('sm')]: {
			height: 150
		}
	},
	title: {
		fontSize: 22,
		fontWeight: 500,
		color: '#555',
		marginBottom: theme.spacing(2)
	},
	fabLeft: {
		position: 'fixed',
		bottom: 60,
		left: '20%'
	},
}));

const Article = ({ id }) => {
	const classes = useStyles();
	const router = useRouter()

	const { detail } = useSelector((state) => state.news);
	const isExist = Object.keys(detail).length > 0;
	const dispatch = useDispatch();

	useEffect(
		() => {
			_getArticleById(dispatch, id);
		},
		[ id ]
	);

	const img =  detail.media?.[0]?.['media-metadata']?.[0]?.url ? `https://nyt.com/${detail.media[0]['media-metadata'][0].url}` : 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
	
	return (
		<Container className={classes.container}>
			
			{isExist && (
				<Card className={classes.card}>
					<CardActionArea>
						<CardMedia className={classes.media} image={img} title="My Post" />
						<CardContent>
							<Typography gutterBottom variant="h6">
								{detail.title}
							</Typography>
							<Typography color="textSecondary" variant="subtitle2">
								{detail.byline}
							</Typography>
							<Typography variant="body2">{detail.abstract}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			)}

			<Tooltip title="Back to Home" aria-label="back" onClick={() => router.back()}>
				<Fab color="primary" className={classes.fabLeft} variant="contained">
					<ArrowBack />
				</Fab>
			</Tooltip>

		</Container>
	);
};

export default Article;

export const getServerSideProps = async ({ params }) => {
	return {
		props: { id: params.id }
	};
};
