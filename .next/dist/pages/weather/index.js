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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx3ZWF0aGVyXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImF4aW9zIiwiU2VhcmNoV2VhdGhlciIsIndpdGhMYXlvdXQiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJXZWF0aGVyUGFnZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwid2VhdGhlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7Ozs7Ozs7SUFFaEIsQTs7Ozs7Ozs7Ozs7MkJBRUksQUFFUjs7MEJBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLEFBQUM7O2VBQUQ7aUJBRkYsQUFDQyxBQUNDLEFBR0Y7QUFIRTtBQUFBOzs7OztBLEFBTnNCOztBQVV6Qjs7QUFFRCxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFFLE9BQVcsQUFDcEM7O0FBRUM7V0FBUyxNQUZWLEFBQU8sQUFFUyxBQUVoQjtBQUpPLEFBQ047QUFGRixBQU1BO2tCQUFlLEFBQVUscURBQVYsQUFBcUIsaUJBQWlCLHNCQUFyRCxBQUFlLEFBQXNDLEFBQVciLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvUmVhY3QvbXktYmxvZyJ9