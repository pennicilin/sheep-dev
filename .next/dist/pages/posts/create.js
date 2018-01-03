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

var _PostControls = require('../../components/Posts/PostControls');

var _PostControls2 = _interopRequireDefault(_PostControls);

var _layout = require('../../components/hoc/layout');

var _layout2 = _interopRequireDefault(_layout);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _initStore = require('../../store/initStore');

var _initStore2 = _interopRequireDefault(_initStore);

var _reactRedux = require('react-redux');

var _actionCreator = require('../../components/Posts/store/actionCreator');

var actionCreator = _interopRequireWildcard(_actionCreator);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\React\\my-blog\\pages\\posts\\create.js?entry';


var PostCreatePage = function (_Component) {
	(0, _inherits3.default)(PostCreatePage, _Component);

	function PostCreatePage() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PostCreatePage);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostCreatePage.__proto__ || (0, _getPrototypeOf2.default)(PostCreatePage)).call.apply(_ref, [this].concat(args))), _this), _this.postSubmitHandler = function (postState) {
			var posts = [];
			for (var key in postState) {
				posts['id'] = Date();
				posts[key] = postState[key].value;
			}
			// console.log(this.props);
			_this.props.dispatch(actionCreator.addPost({ posts: posts }));
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PostCreatePage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, _react2.default.createElement('h2', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, 'Create New Post'), _react2.default.createElement(_PostControls2.default, (0, _extends3.default)({}, this.props, { postSubmitHandler: this.postSubmitHandler, __source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			})));
		}
	}]);

	return PostCreatePage;
}(_react.Component);

;

exports.default = (0, _nextReduxWrapper2.default)(_initStore2.default)((0, _layout2.default)(PostCreatePage));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0c1xcY3JlYXRlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUG9zdENvbnRyb2xzIiwid2l0aExheW91dCIsIndpdGhSZWR1eCIsImluaXRTdG9yZSIsImNvbm5lY3QiLCJhY3Rpb25DcmVhdG9yIiwiUG9zdENyZWF0ZVBhZ2UiLCJwb3N0U3VibWl0SGFuZGxlciIsInBvc3RTdGF0ZSIsInBvc3RzIiwia2V5IiwiRGF0ZSIsInZhbHVlIiwicHJvcHMiLCJkaXNwYXRjaCIsImFkZFBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBZTs7OztBQUN0QixBQUFTOztBQUNULEFBQU87O0lBQVAsQUFBWSxBQUFtQjs7Ozs7Ozs7O0lBRXpCLEE7Ozs7Ozs7Ozs7Ozs7OzBOLEFBRUwsb0JBQW9CLFVBQUEsQUFBRSxXQUFlLEFBQ3BDO09BQU0sUUFBTixBQUFjLEFBQ2Q7UUFBTSxJQUFOLEFBQVUsT0FBVixBQUFpQixXQUFZLEFBQzVCO1VBQUEsQUFBTSxRQUFOLEFBQWMsQUFDZDtVQUFBLEFBQU0sT0FBTyxVQUFBLEFBQVUsS0FBdkIsQUFBNEIsQUFDNUI7QUFDRDtBQUNBO1NBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxjQUFBLEFBQWMsUUFBUSxFQUFDLE9BQTNDLEFBQW9CLEFBQXNCLEFBQU8sQUFDakQ7QTs7Ozs7MkJBRVEsQUFDUjswQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0Esb0NBQUEsQUFBQyxpRUFBaUIsS0FBbEIsQUFBdUIsU0FBTyxtQkFBbUIsS0FBakQsQUFBc0Q7ZUFBdEQ7aUJBSEYsQUFDQyxBQUVDLEFBR0Y7QUFIRTs7Ozs7O0FBaEJ5QixBOztBQW9CNUIsQUFFRDs7a0JBQWUsQUFBVSxxREFBVyxzQkFBcEMsQUFBZSxBQUFxQixBQUFXIiwiZmlsZSI6ImNyZWF0ZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9SZWFjdC9teS1ibG9nIn0=