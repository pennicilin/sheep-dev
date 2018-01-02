import React from 'react';
import Posts from '../../components/Posts/Posts';
import withLayout from '../../components/hoc/layout';

const postsPage = () => (
		<section>
			<Posts />
		</section>
	);

export default withLayout(postsPage);