'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\React\\my-blog\\components\\Themes\\Blog\\UI\\navigators.js';


var navigator = function navigator() {
	var menus = [{ 'text': 'Home', 'href': '/' }, { 'text': 'About', 'href': '/about' }];

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
			}, _react2.default.createElement('a', {
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

exports.default = navigator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRoZW1lc1xcQmxvZ1xcVUlcXG5hdmlnYXRvcnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwibmF2aWdhdG9yIiwibWVudXMiLCJnZXRNZW51cyIsIm1hcCIsIm1lbnUiLCJ0ZXh0IiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sWUFBWSxTQUFaLEFBQVksWUFBTSxBQUN2QjtLQUFNLFFBQVEsQ0FDYixFQUFDLFFBQUQsQUFBUyxRQUFRLFFBREosQUFDYixBQUF5QixPQUN6QixFQUFDLFFBQUQsQUFBUyxTQUFTLFFBRm5CLEFBQWMsQUFFYixBQUEwQixBQUczQjs7S0FBTSxXQUFXLFNBQVgsQUFBVyxXQUFNLEFBQ3RCO2VBQU8sQUFBTSxJQUFJLGdCQUFBOzBCQUNoQixjQUFBLFFBQUksS0FBSyxLQUFULEFBQWM7ZUFBZDtpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDQyxBQUFDLGdDQUFLLE1BQU0sS0FBWixBQUFpQjtlQUFqQjtpQkFBQSxBQUF1QjtBQUF2QjtzQkFBdUIsY0FBQTs7ZUFBQTtpQkFBQSxBQUFJO0FBQUo7QUFBQSxXQUZSLEFBQ2hCLEFBQ0MsQUFBdUIsQUFBUztBQUZsQyxBQUFPLEFBS1AsR0FMTztBQURSLEFBUUE7O3dCQUFPLGNBQUE7O2FBQUE7ZUFBQSxBQUFLO0FBQUw7QUFBQSxFQUFBLEVBQVAsQUFBTyxBQUNQO0FBZkQsQUFpQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmF2aWdhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9SZWFjdC9teS1ibG9nIn0=