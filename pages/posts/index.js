import React, { Component } from 'react';
import Posts from '../../components/Posts/Posts';
import withLayout from '../../components/hoc/layout';
import withRedux from 'next-redux-wrapper';
import initStore from '../../store/initStore';

class PostsPage extends Component {
	
	render() {
		
		return (
			<section>
				<Posts {...this.props} />
			</section>
		);
	}
};

const mapStateToProps = ( state ) => {
	return {
		post: state.post
	}
};
export default withRedux(initStore, mapStateToProps)(withLayout(PostsPage));
