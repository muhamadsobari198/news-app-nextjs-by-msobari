import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _getArticleById } from '../../src/redux/apiCalls';

import {
	Container,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	makeStyles,
	Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10)
	},
	card: {
		marginBottom: theme.spacing(5)
	},
	media: {
		height: 250,
		[theme.breakpoints.down('sm')]: {
			height: 150
		}
	}
}));

const Article = ({ id }) => {
	const classes = useStyles();

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
		</Container>
	);
};

export default Article;

export const getServerSideProps = async ({ params }) => {
	return {
		props: { id: params.id }
	};
};
