import React from 'react';
import Header from './header';
import Footer from './footer';
import Navigator from '../UI/navigators';
import MainMenu from '../UI/mainMenus';
import Aux from '../../../hoc/Auxs';
import AppBar from 'material-ui/AppBar';

const layout = ( props ) => {
	return (
		<Aux>
			<AppBar title="My Blog" />
			<Navigator />
			<Header />
			<MainMenu />
				{ props.children }
			<Footer />
		</Aux>
	);
};

export default layout;