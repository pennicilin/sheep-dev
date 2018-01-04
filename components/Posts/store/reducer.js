import * as actionTypes from './actionTypes';

const initialState = {
					posts: [
							{id: 1 ,title: 'บทความ 1', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.'},
							{id: 2 ,title: 'บทความ 2', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.'},
							{id: 3 ,title: 'บทความ 3', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.'},
							{id: 4 ,title: 'บทความ 4', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.'}
						]
				};

const reducer = (state = initialState , action) => {
	let newState = {};

	switch (action.type) {
		case actionTypes.ADD_POST :
			// console.log('PAYLOAD', action.payload.posts);
			newState = {...state};
			// console.log('BEFORE', newState, state);
			newState.posts.push(action.payload.posts);
			// state.merchants = newState.merchants;
			// console.log('ADD_POST',newState);
			return newState;

		case actionTypes.DELETE_POST :
			newState = {...state};
			// const posts = [...newState.posts];
			const posts = newState.posts.filter( post => (
				post.id != action.payload.postId
			));
			newState.posts = posts;
			// console.log('DELETE POST', posts);
			return newState;
		default :
			// console.log('DEFAULT',state);
			return state;
	};
	return state;
}

export default reducer;