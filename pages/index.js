import React from 'react';
import Posts from '../components/Posts/Posts';
import withLayout from '../components/hoc/layout';

const indexPage = () => (
		<section>
			<Posts />
		</section>
	);

export default withLayout(indexPage);