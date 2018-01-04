import React, { Component } from 'react';
import Post from './Post';
import * as actionCreator from './store/actionCreator';
import { connect } from 'react-redux';

class Posts extends Component {
	// console.log(props.post);
	// const posts = ( this.props.post.posts ) ? this.props.post.posts : null; 
	
	clickedDelete = (postId) => {
		this.props.onDeletePost( postId );
	};

	getPosts = () => {
		return this.props.post.posts.map( post => (
			<Post 
				key={post.id} 
				title={post.title} 
				content={post.content} 
				clickedDelete={() => this.clickedDelete( post.id )} />
		));
	};

	render() {
		return ( this.props.post.posts ) ? this.getPosts() : <p>Loading ... </p>;
	};
};
/**/
const mapDispatchToProps = dispatch => {
	return {
		onDeletePost: ( postId ) => {
			dispatch(actionCreator.deletePost( {'postId':postId} ));
		}
	}
};

export default connect( null, mapDispatchToProps )(Posts);