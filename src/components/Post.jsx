import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	makeStyles,
	Typography
} from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { useRouter } from "next/router";
import Link from "next/link";


const useStyles = makeStyles((theme) => ({
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

const Post = ({ data }) => {
	const router = useRouter();
	const classes = useStyles();

	const handleClick = () => {
		router.push({
			pathname: `/articles/${data.id}`,
		})
	}

	const img =  data.media?.[0]?.['media-metadata']?.[0]?.url ? `https://nyt.com/${data.media[0]['media-metadata'][0].url}` : 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg' 
	return (
		<Card className={classes.card}>
			<Link href={`/articles/${data.id}`} passHref>
			<CardActionArea>
				<CardMedia className={classes.media} image={img} title="My Post" />
				<CardContent>
					<Typography gutterBottom variant="h6" >
						{data.title}
					</Typography>
					<Typography color="textSecondary" variant="subtitle2">
						{data.byline}
					</Typography>
					<Typography variant="body2">
						{data.abstract}
					</Typography>
				</CardContent>
			</CardActionArea>
			</Link>
			<CardActions>
			<Link href={`/articles/${data.id}`} passHref>
				<Button size="small" color="primary">
					<Visibility style={{marginRight:'5px'}}/> Read More
				</Button>
			</Link>
			</CardActions>
		</Card>
	);
};

export default Post;
