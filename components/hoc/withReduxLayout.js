import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeLayout from '../Themes/Blog/Layout/layout';
import withRedux from 'next-redux-wrapper';

const Layout = (PageComponent) => {
	const layout = ( props ) => (
		<MuiThemeProvider>
			<ThemeLayout>
				<PageComponent { ...props } />
			</ThemeLayout>
		</MuiThemeProvider>
	);

	return layout;
};

export default Layout;