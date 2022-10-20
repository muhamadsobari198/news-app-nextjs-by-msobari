import * as React from 'react';

import Head from 'next/head';
import theme from '../src/theme';

import Feed from '../src/components/Feed';

export default function Index() {
	return (
		<React.Fragment>
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
			<Feed/>
		</React.Fragment>
	);
}
