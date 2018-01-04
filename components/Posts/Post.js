import React from 'react';
import DeleteButton from '../Themes/Blog/UI/Button/Delete';
/*
import IconButton from 'material-ui/IconButton';
import DeleteButton from 'material-ui/svg-icons/action/delete';
import {red500, yellow500, blue500, grey500} from 'material-ui/styles/colors';*/


const post = ( props ) => (
	<article id={props.id}>
		<h2>
			{props.title}
			<DeleteButton clicked={props.clickedDelete} />
		</h2> 
		<p>{props.content}</p>
	</article>
);

export default post;