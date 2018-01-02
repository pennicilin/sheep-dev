import React from 'react';
import Post from './Post';

const posts = () => {
	const posts = [
		{id: 1 ,title: 'บทความ 1', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.'},
		{id: 2 ,title: 'บทความ 2', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.'},
		{id: 3 ,title: 'บทความ 3', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.'},
		{id: 4 ,title: 'บทความ 4', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.'}
	];

	const getPosts = () => {
		return posts.map( post => (
			<Post key={post.id} title={post.title} content={post.content} />
		));
	};

	return getPosts();
};

export default posts;