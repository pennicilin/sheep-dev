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

// import { connect } from 'react-redux';

var posts = function posts(props) {
	// console.log(props.post);
	var posts = props.post.posts ? props.post.posts : null;

	var getPosts = function getPosts() {
		return posts.map(function (post) {
			return _react2.default.createElement(_Post2.default, { key: post.id, title: post.title, content: post.content, __source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			});
		});
	};

	return posts ? getPosts() : _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, 'Loading ... ');
};

exports.default = posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvc3RzXFxQb3N0cy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvc3QiLCJwb3N0cyIsInByb3BzIiwicG9zdCIsImdldFBvc3RzIiwibWFwIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7Ozs7O0FBQ2pCOztBQUVBLElBQU0sUUFBUSxlQUFBLEFBQUUsT0FBVyxBQUMxQjtBQUNBO0tBQU0sUUFBVSxNQUFBLEFBQU0sS0FBUixBQUFhLFFBQVUsTUFBQSxBQUFNLEtBQTdCLEFBQWtDLFFBQWhELEFBQXdELEFBRXhEOztLQUFNLFdBQVcsU0FBWCxBQUFXLFdBQU0sQUFDdEI7ZUFBTyxBQUFNLElBQUssZ0JBQUE7MEJBQ2pCLEFBQUMsZ0NBQUssS0FBSyxLQUFYLEFBQWdCLElBQUksT0FBTyxLQUEzQixBQUFnQyxPQUFPLFNBQVMsS0FBaEQsQUFBcUQ7ZUFBckQ7aUJBRGlCLEFBQ2pCO0FBQUE7SUFBQTtBQURELEFBQU8sQUFHUCxHQUhPO0FBRFIsQUFNQTs7UUFBTyxBQUFFLFFBQUYsQUFBWSw2QkFBYSxjQUFBOzthQUFBO2VBQUE7QUFBQTtBQUFBLEVBQUEsRUFBaEMsQUFBZ0MsQUFDaEM7QUFYRCxBQWFBOztrQkFBQSxBQUFlIiwiZmlsZSI6IlBvc3RzLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL1JlYWN0L215LWJsb2cifQ==