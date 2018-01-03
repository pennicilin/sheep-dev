import React from 'react';
import Post from './Post';
// import { connect } from 'react-redux';

const posts = ( props ) => {
	// console.log(props.post);
	const posts = ( props.post.posts ) ? props.post.posts : null; 
	
	const getPosts = () => {
		return posts.map( post => (
			<Post key={post.id} title={post.title} content={post.content} />
		));
	};

	return ( posts ) ? getPosts() : <p>Loading ... </p>;
};

export default posts;