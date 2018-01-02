'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\React\\my-blog\\components\\Themes\\Blog\\UI\\mainMenus.js';


var mainMenus = function mainMenus() {
	var menus = [{ 'text': 'Posts', 'href': '/posts' }, { 'text': 'Add Post', 'href': '/posts/create' }];

	var getMenus = function getMenus() {
		return menus.map(function (menu) {
			return _react2.default.createElement('li', { key: menu.text, __source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, _react2.default.createElement(_link2.default, { href: menu.href, __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement('button', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, menu.text)));
		});
	};

	return _react2.default.createElement('ul', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, getMenus());
};

exports.default = mainMenus;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRoZW1lc1xcQmxvZ1xcVUlcXG1haW5NZW51cy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJtYWluTWVudXMiLCJtZW51cyIsImdldE1lbnVzIiwibWFwIiwibWVudSIsInRleHQiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxZQUFZLFNBQVosQUFBWSxZQUFNLEFBQ3ZCO0tBQU0sUUFBUSxDQUNiLEVBQUMsUUFBRCxBQUFTLFNBQVMsUUFETCxBQUNiLEFBQTBCLFlBQzFCLEVBQUMsUUFBRCxBQUFTLFlBQVksUUFGdEIsQUFBYyxBQUViLEFBQTZCLEFBRzlCOztLQUFNLFdBQVcsU0FBWCxBQUFXLFdBQU0sQUFDdEI7ZUFBTyxBQUFNLElBQUksZ0JBQUE7MEJBQ2hCLGNBQUEsUUFBSSxLQUFLLEtBQVQsQUFBYztlQUFkO2lCQUFBLEFBQ0M7QUFERDtJQUFBLGtCQUNDLEFBQUMsZ0NBQUssTUFBTSxLQUFaLEFBQWlCO2VBQWpCO2lCQUFBLEFBQXVCO0FBQXZCO3NCQUF1QixjQUFBOztlQUFBO2lCQUFBLEFBQVM7QUFBVDtBQUFBLFdBRlIsQUFDaEIsQUFDQyxBQUF1QixBQUFjO0FBRnZDLEFBQU8sQUFLUCxHQUxPO0FBRFIsQUFRQTs7d0JBQU8sY0FBQTs7YUFBQTtlQUFBLEFBQUs7QUFBTDtBQUFBLEVBQUEsRUFBUCxBQUFPLEFBQ1A7QUFmRCxBQWlCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJtYWluTWVudXMuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvUmVhY3QvbXktYmxvZyJ9