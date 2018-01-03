import React, { Component } from 'react';
import PostControls from '../../components/Posts/PostControls';
import withLayout from '../../components/hoc/layout';
import withRedux from 'next-redux-wrapper';
import initStore from '../../store/initStore';
import { connect } from 'react-redux';
import * as actionCreator from '../../components/Posts/store/actionCreator';

class PostCreatePage extends Component {
	
	postSubmitHandler = ( postState ) => {
		const posts = [];
		for ( let key in postState ) {
			posts['id'] = Date();
			posts[key] = postState[key].value;
		}
		// console.log(this.props);
		this.props.dispatch(actionCreator.addPost({posts:posts}));
	};

	render() {
		return (
			<div>
				<h2>Create New Post</h2>
				<PostControls {...this.props} postSubmitHandler={this.postSubmitHandler} />
			</div>
		);
	}
};

export default withRedux(initStore)(withLayout(PostCreatePage));