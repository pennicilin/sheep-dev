import React from 'react';
import PostControls from '../../components/Posts/PostControls';
import withLayout from '../../components/hoc/layout';

const postCreatePage = () => (
		<div>
			<h2>Create New Post</h2>
			<PostControls />
		</div>
	);

export default withLayout(postCreatePage);