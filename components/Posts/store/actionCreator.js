import * as actionTypes from './actionTypes';
// import axios from '../../../../axios';

export const addPost = ( payload ) => {
	return {
		type: actionTypes.ADD_POST,
		payload: payload
	}
};

export const deletePost = ( payload ) => {
	return {
		type: actionTypes.DELETE_POST,
		payload: payload
	}
};
