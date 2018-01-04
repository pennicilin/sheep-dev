'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _searchWeather = require('../../components/Weather/searchWeather');

var _searchWeather2 = _interopRequireDefault(_searchWeather);

var _layout = require('../../components/hoc/layout');

var _layout2 = _interopRequireDefault(_layout);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _initStore = require('../../store/initStore');

var _initStore2 = _interopRequireDefault(_initStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\React\\my-blog\\pages\\weather\\index.js?entry';
// import Posts from '../../components/Posts/Posts';


var WeatherPage = function (_Component) {
	(0, _inherits3.default)(WeatherPage, _Component);

	function WeatherPage() {
		(0, _classCallCheck3.default)(this, WeatherPage);

		return (0, _possibleConstructorReturn3.default)(this, (WeatherPage.__proto__ || (0, _getPrototypeOf2.default)(WeatherPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(WeatherPage, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement('section', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement(_searchWeather2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}));
		}
	}]);

	return WeatherPage;
}(_react.Component);

;

var mapStateToProps = function mapStateToProps(state) {
	return {
		// post: state.post,
		weather: state.weather
	};
};
exports.default = (0, _nextReduxWrapper2.default)(_initStore2.default, mapStateToProps)((0, _layout2.default)(WeatherPage));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx3ZWF0aGVyXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlNlYXJjaFdlYXRoZXIiLCJ3aXRoTGF5b3V0Iiwid2l0aFJlZHV4IiwiaW5pdFN0b3JlIiwiV2VhdGhlclBhZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIndlYXRoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7Ozs7O0FBSnRCOzs7SSxBQU1NOzs7Ozs7Ozs7OzsyQkFFSSxBQUVSOzswQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsQUFBQzs7ZUFBRDtpQkFGRixBQUNDLEFBQ0MsQUFHRjtBQUhFO0FBQUE7Ozs7O0FBTnNCLEE7O0FBVXpCOztBQUVELElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUUsT0FBVyxBQUNwQzs7QUFFQztXQUFTLE1BRlYsQUFBTyxBQUVTLEFBRWhCO0FBSk8sQUFDTjtBQUZGLEFBTUE7a0JBQWUsQUFBVSxxREFBVixBQUFxQixpQkFBaUIsc0JBQXJELEFBQWUsQUFBc0MsQUFBVyIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9SZWFjdC9teS1ibG9nIn0=