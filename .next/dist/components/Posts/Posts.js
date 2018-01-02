'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\React\\my-blog\\components\\Posts\\Posts.js';


var posts = function posts() {
	var posts = [{ id: 1, title: 'บทความ 1', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.' }, { id: 2, title: 'บทความ 2', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.' }, { id: 3, title: 'บทความ 3', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.' }, { id: 4, title: 'บทความ 4', 'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam, consequatur excepturi quasi nihil consectetur et eius nemo! Impedit odit iure temporibus ullam esse recusandae accusamus adipisci commodi accusantium ut.' }];

	var getPosts = function getPosts() {
		return posts.map(function (post) {
			return _react2.default.createElement(_Post2.default, { key: post.id, title: post.title, content: post.content, __source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			});
		});
	};

	return getPosts();
};

exports.default = posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvc3RzXFxQb3N0cy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvc3QiLCJwb3N0cyIsImlkIiwidGl0bGUiLCJnZXRQb3N0cyIsIm1hcCIsInBvc3QiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFFakIsSUFBTSxRQUFRLGlCQUFNLEFBQ25CO0tBQU0sUUFBUSxDQUNiLEVBQUMsSUFBRCxBQUFLLEdBQUcsT0FBUixBQUFlLFlBQVksV0FEZCxBQUNiLEFBQXNDLHVPQUN0QyxFQUFDLElBQUQsQUFBSyxHQUFHLE9BQVIsQUFBZSxZQUFZLFdBRmQsQUFFYixBQUFzQyx1T0FDdEMsRUFBQyxJQUFELEFBQUssR0FBRyxPQUFSLEFBQWUsWUFBWSxXQUhkLEFBR2IsQUFBc0MsdU9BQ3RDLEVBQUMsSUFBRCxBQUFLLEdBQUcsT0FBUixBQUFlLFlBQVksV0FKNUIsQUFBYyxBQUliLEFBQXNDLEFBR3ZDOztLQUFNLFdBQVcsU0FBWCxBQUFXLFdBQU0sQUFDdEI7ZUFBTyxBQUFNLElBQUssZ0JBQUE7MEJBQ2pCLEFBQUMsZ0NBQUssS0FBSyxLQUFYLEFBQWdCLElBQUksT0FBTyxLQUEzQixBQUFnQyxPQUFPLFNBQVMsS0FBaEQsQUFBcUQ7ZUFBckQ7aUJBRGlCLEFBQ2pCO0FBQUE7SUFBQTtBQURELEFBQU8sQUFHUCxHQUhPO0FBRFIsQUFNQTs7UUFBQSxBQUFPLEFBQ1A7QUFmRCxBQWlCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJQb3N0cy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9SZWFjdC9teS1ibG9nIn0=