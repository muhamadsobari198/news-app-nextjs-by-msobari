import {
	getMostPopularArticleStart,
	getMostPopularArticleSuccess,
	getMostPopularArticleFailure,
	getArticleById
} from './articleReducer';
import axios from 'axios';

/* -------------------------------------------------------------------------- */
/*                               Get Articles                                     */
/* -------------------------------------------------------------------------- */

const _getMostPopularArticles = async (dispatch, period) => {
	dispatch(getMostPopularArticleStart());
	try {
		const res = await axios.get(
			`https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=BbG6SkAuBg5dyHnWtQ3J14dkPw9GVQgF`
		);
		dispatch(getMostPopularArticleSuccess(res.data.results));
	} catch (e) {
		dispatch(getMostPopularArticleFailure());
	}
};

const _getArticleById = async (dispatch, id) => {
	dispatch(getArticleById(id));
};

export { _getMostPopularArticles, _getArticleById };
