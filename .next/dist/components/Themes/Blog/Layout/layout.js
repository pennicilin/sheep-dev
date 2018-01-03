'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _navigators = require('../UI/navigators');

var _navigators2 = _interopRequireDefault(_navigators);

var _mainMenus = require('../UI/mainMenus');

var _mainMenus2 = _interopRequireDefault(_mainMenus);

var _Auxs = require('../../../hoc/Auxs');

var _Auxs2 = _interopRequireDefault(_Auxs);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\React\\my-blog\\components\\Themes\\Blog\\Layout\\layout.js';


var layout = function layout(props) {
	return _react2.default.createElement(_Auxs2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement(_AppBar2.default, { title: 'My Blog', __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}), _react2.default.createElement('div', { style: { padding: '15px' }, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement(_navigators2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}), _react2.default.createElement(_header2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}), _react2.default.createElement(_mainMenus2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}), props.children), _react2.default.createElement(_footer2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}));
};

exports.default = layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRoZW1lc1xcQmxvZ1xcTGF5b3V0XFxsYXlvdXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJGb290ZXIiLCJOYXZpZ2F0b3IiLCJNYWluTWVudSIsIkF1eCIsIkFwcEJhciIsImxheW91dCIsInByb3BzIiwicGFkZGluZyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBRSxPQUFXLEFBQzNCO3dCQUNDLEFBQUM7O2FBQUQ7ZUFBQSxBQUNDO0FBREQ7QUFBQSxFQUFBLGtCQUNDLEFBQUMsa0NBQU8sT0FBUixBQUFjO2FBQWQ7ZUFERCxBQUNDLEFBQ0E7QUFEQTtxQkFDQSxjQUFBLFNBQUssT0FBTyxFQUFDLFNBQWIsQUFBWSxBQUFVO2FBQXRCO2VBQUEsQUFDQztBQUREO29CQUNDLEFBQUM7O2FBQUQ7ZUFERCxBQUNDLEFBQ0E7QUFEQTtBQUFBLHFCQUNBLEFBQUM7O2FBQUQ7ZUFGRCxBQUVDLEFBRUE7QUFGQTtBQUFBLHFCQUVBLEFBQUM7O2FBQUQ7ZUFKRCxBQUlDLEFBQ0c7QUFESDtBQUFBLFdBTkYsQUFFQyxBQUtVLEFBRVYsMkJBQUEsQUFBQzs7YUFBRDtlQVZGLEFBQ0MsQUFTQyxBQUdGO0FBSEU7QUFBQTtBQVhILEFBZ0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9SZWFjdC9teS1ibG9nIn0=