'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Posts = require('../../components/Posts/Posts');

var _Posts2 = _interopRequireDefault(_Posts);

var _layout = require('../../components/hoc/layout');

var _layout2 = _interopRequireDefault(_layout);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _initStore = require('../../store/initStore');

var _initStore2 = _interopRequireDefault(_initStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\React\\my-blog\\pages\\posts\\index.js?entry';


var PostsPage = function (_Component) {
	(0, _inherits3.default)(PostsPage, _Component);

	function PostsPage() {
		(0, _classCallCheck3.default)(this, PostsPage);

		return (0, _possibleConstructorReturn3.default)(this, (PostsPage.__proto__ || (0, _getPrototypeOf2.default)(PostsPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(PostsPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('section', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, _react2.default.createElement(_Posts2.default, (0, _extends3.default)({}, this.props, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			})));
		}
	}]);

	return PostsPage;
}(_react.Component);

;

var mapStateToProps = function mapStateToProps(state) {
	return {
		post: state.post
	};
};
exports.default = (0, _nextReduxWrapper2.default)(_initStore2.default, mapStateToProps)((0, _layout2.default)(PostsPage));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0c1xcaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQb3N0cyIsIndpdGhMYXlvdXQiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJQb3N0c1BhZ2UiLCJwcm9wcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWU7Ozs7Ozs7OztJLEFBRWhCOzs7Ozs7Ozs7OzsyQkFFSSxBQUNSOzBCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxBQUFDLDBEQUFVLEtBQVgsQUFBZ0I7O2VBQWhCO2lCQUZGLEFBQ0MsQUFDQyxBQUdGO0FBSEU7QUFBQTs7Ozs7QSxBQUxvQjs7QUFTdkI7O0FBRUQsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBRSxPQUFXLEFBQ3BDOztRQUNPLE1BRFAsQUFBTyxBQUNNLEFBRWI7QUFITyxBQUNOO0FBRkYsQUFLQTtrQkFBZSxBQUFVLHFEQUFWLEFBQXFCLGlCQUFpQixzQkFBckQsQUFBZSxBQUFzQyxBQUFXIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL1JlYWN0L215LWJsb2cifQ==