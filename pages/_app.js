import React, { useEffect } from 'react';
import Head from 'next/head';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Layout from '../src/components/Layout';


import  { store, persistor } from '../src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		  	<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<Head>
							<meta charSet="utf-8" />
							<meta
								name="viewport"
								content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
							/>
							<meta name="theme-color" content={theme.palette.primary.main} />
							<link
								rel="stylesheet"
								href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
							/>
							<title>News App - Next.js - M.Sobari</title>
						</Head>
						<Layout>
							<CssBaseline />
							<Component {...pageProps} />
						</Layout>
					</ThemeProvider>
				</PersistGate>
			</Provider>
	);
}

export default MyApp;