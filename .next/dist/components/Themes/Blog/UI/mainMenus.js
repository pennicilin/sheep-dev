'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\React\\my-blog\\components\\Themes\\Blog\\UI\\mainMenus.js';


var mainMenus = function mainMenus() {
	var menus = [{ 'text': 'Posts', 'href': '/posts', configs: { primary: false } }, { 'text': 'Add Post', 'href': '/posts/create', configs: { primary: true } }];

	var getMenus = function getMenus() {
		return menus.map(function (menu) {
			return _react2.default.createElement(_link2.default, { key: menu.text, href: menu.href, __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement(_Button2.default, (0, _extends3.default)({ style: { margin: '0 10px' }, label: menu.text }, menu.configs, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			})));
		});
	};

	return _react2.default.createElement('div', { style: { "textAlign": 'center' }, __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, getMenus());
};

exports.default = mainMenus;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRoZW1lc1xcQmxvZ1xcVUlcXG1haW5NZW51cy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJCdXR0b24iLCJtYWluTWVudXMiLCJtZW51cyIsImNvbmZpZ3MiLCJwcmltYXJ5IiwiZ2V0TWVudXMiLCJtYXAiLCJtZW51IiwidGV4dCIsImhyZWYiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CLElBQU0sWUFBWSxTQUFaLEFBQVksWUFBTSxBQUN2QjtLQUFNLFFBQVEsQ0FDYixFQUFDLFFBQUQsQUFBUyxTQUFTLFFBQWxCLEFBQTBCLFVBQVUsU0FBUyxFQUFDLFNBRGpDLEFBQ2IsQUFBNkMsQUFBVSxXQUN2RCxFQUFDLFFBQUQsQUFBUyxZQUFZLFFBQXJCLEFBQTZCLGlCQUFpQixTQUFTLEVBQUMsU0FGekQsQUFBYyxBQUViLEFBQXVELEFBQVUsQUFHbEU7O0tBQU0sV0FBVyxTQUFYLEFBQVcsV0FBTSxBQUN0QjtlQUFPLEFBQU0sSUFBSSxnQkFBQTswQkFDaEIsQUFBQyxnQ0FBSyxLQUFLLEtBQVgsQUFBZ0IsTUFBTSxNQUFNLEtBQTVCLEFBQWlDO2VBQWpDO2lCQUFBLEFBQXVDO0FBQXZDO0lBQUEsa0JBQXVDLEFBQUMseURBQU8sT0FBTyxFQUFDLFFBQWhCLEFBQWUsQUFBUyxZQUFZLE9BQU8sS0FBM0MsQUFBZ0QsUUFBVSxLQUExRCxBQUErRDs7ZUFBL0Q7aUJBRHZCLEFBQ2hCLEFBQXVDO0FBQUE7QUFBQTtBQUR4QyxBQUFPLEFBR1AsR0FITztBQURSLEFBTUE7O3dCQUFPLGNBQUEsU0FBSyxPQUFPLEVBQUMsYUFBYixBQUFZLEFBQWM7YUFBMUI7ZUFBQSxBQUFzQztBQUF0QztFQUFBLEVBQVAsQUFBTyxBQUNQO0FBYkQsQUFlQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJtYWluTWVudXMuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvUmVhY3QvbXktYmxvZyJ9