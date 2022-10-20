import { createSlice, current } from '@reduxjs/toolkit';

const articleReducer = createSlice({
	name: 'articles',
	initialState: {
		isFetching: false,
		articles: [],
		detail: {}
	},
	reducers: {
		/* -------------------------------------------------------------------------- */
		/*                                Get Articles                                */
		/* -------------------------------------------------------------------------- */
		getMostPopularArticleStart(state, action) {
			state.isFetching = true;
		},
		getMostPopularArticleSuccess(state, action) {
			state.isFetching = false;
			state.articles = action.payload;
		},
		getMostPopularArticleFailure(state, action) {
			state.isFetching = false;
		},
		getArticleById(state, action) {
			const article = current(state.articles).find((item) => item.id == action.payload);
			state.detail = article;
		}
	}
});
export const { getMostPopularArticleStart, getMostPopularArticleSuccess, getMostPopularArticleFailure, getArticleById } = articleReducer.actions;

export default articleReducer.reducer;
