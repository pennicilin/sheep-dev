'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = require('./actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	posts: [{ id: 1, title: 'บทความ 1', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.' }, { id: 2, title: 'บทความ 2', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.' }, { id: 3, title: 'บทความ 3', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.' }, { id: 4, title: 'บทความ 4', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.' }]
};

var reducer = function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = {};

	switch (action.type) {
		case actionTypes.ADD_POST:
			// console.log('PAYLOAD', action.payload.posts);
			newState = (0, _extends3.default)({}, state);
			// console.log('BEFORE', newState, state);
			newState.posts.push(action.payload.posts);
			// state.merchants = newState.merchants;
			// console.log('ADD_POST',newState);
			return newState;

		case actionTypes.DELETE_POST:
			newState = (0, _extends3.default)({}, state);
			// const posts = [...newState.posts];
			var posts = newState.posts.filter(function (post) {
				return post.id != action.payload.postId;
			});
			newState.posts = posts;
			// console.log('DELETE POST', posts);
			return newState;
		default:
			// console.log('DEFAULT',state);
			return state;
	};
	return state;
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvc3RzXFxzdG9yZVxccmVkdWNlci5qcyJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsImluaXRpYWxTdGF0ZSIsInBvc3RzIiwiaWQiLCJ0aXRsZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm5ld1N0YXRlIiwidHlwZSIsIkFERF9QT1NUIiwicHVzaCIsInBheWxvYWQiLCJERUxFVEVfUE9TVCIsImZpbHRlciIsInBvc3QiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVksQUFBaUI7Ozs7OztBQUU3QixJQUFNO1FBQ00sQ0FDTCxFQUFDLElBQUQsQUFBSyxHQUFHLE9BQVIsQUFBZSxZQUFZLFdBRHRCLEFBQ0wsQUFBc0MsdU9BQ3RDLEVBQUMsSUFBRCxBQUFLLEdBQUcsT0FBUixBQUFlLFlBQVksV0FGdEIsQUFFTCxBQUFzQyx1T0FDdEMsRUFBQyxJQUFELEFBQUssR0FBRyxPQUFSLEFBQWUsWUFBWSxXQUh0QixBQUdMLEFBQXNDLHVPQUN0QyxFQUFDLElBQUQsQUFBSyxHQUFHLE9BQVIsQUFBZSxZQUFZLFdBTGxDLEFBQXFCLEFBQ1QsQUFJTCxBQUFzQztBQUx4QixBQUNoQjs7QUFRTCxJQUFNLFVBQVUsU0FBVixBQUFVLFVBQW1DO0tBQWxDLEFBQWtDLDRFQUExQixBQUEwQjtLQUFYLEFBQVcsbUJBQ2xEOztLQUFJLFdBQUosQUFBZSxBQUVmOztTQUFRLE9BQVIsQUFBZSxBQUNkO09BQUssWUFBTCxBQUFpQixBQUNoQjtBQUNBO3lDQUFBLEFBQWUsQUFDZjtBQUNBO1lBQUEsQUFBUyxNQUFULEFBQWUsS0FBSyxPQUFBLEFBQU8sUUFBM0IsQUFBbUMsQUFDbkM7QUFDQTtBQUNBO1VBQUEsQUFBTyxBQUVSOztPQUFLLFlBQUwsQUFBaUIsQUFDaEI7eUNBQUEsQUFBZSxBQUNmO0FBQ0E7T0FBTSxpQkFBUSxBQUFTLE1BQVQsQUFBZSxPQUFRLGdCQUFBO1dBQ3BDLEtBQUEsQUFBSyxNQUFNLE9BQUEsQUFBTyxRQURrQixBQUNWO0FBRDNCLEFBQWMsQUFHZCxJQUhjO1lBR2QsQUFBUyxRQUFULEFBQWlCLEFBQ2pCO0FBQ0E7VUFBQSxBQUFPLEFBQ1I7QUFDQztBQUNBO1VBckJGLEFBcUJFLEFBQU87RUFDUixBQUNEO1FBQUEsQUFBTyxBQUNQO0FBM0JELEFBNkJBOztrQkFBQSxBQUFlIiwiZmlsZSI6InJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvUmVhY3QvbXktYmxvZyJ9