import React from 'react';

const post = ( props ) => (
	<article id={props.id}>
		<h2>{props.title}</h2>
		<p>{props.content}</p>
	</article>
);

export default post;