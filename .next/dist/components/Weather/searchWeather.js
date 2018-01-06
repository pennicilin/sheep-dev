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

var _Input = require('../Themes/Blog/UI/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('../Themes/Blog/UI/Button');

var _Button2 = _interopRequireDefault(_Button);

var _actionCreator = require('./store/actionCreator');

var actionCreator = _interopRequireWildcard(_actionCreator);

var _reactRedux = require('react-redux');

var _api = require('../Socket/api');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\React\\my-blog\\components\\Weather\\searchWeather.js';


var SearchWeather = function (_Component) {
	(0, _inherits3.default)(SearchWeather, _Component);

	function SearchWeather() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, SearchWeather);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SearchWeather.__proto__ || (0, _getPrototypeOf2.default)(SearchWeather)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			controls: {
				'address': {
					elementType: 'inputText',
					elementConfig: {
						fullWidth: true,
						hintText: 'Address'
					},
					value: ''
				}
			}
		}, _this.changedHandler = function (event, fromIdentifier) {
			// console.log( event.target.value, fromIdentifier );
			var updatedControls = (0, _extends3.default)({}, _this.state.controls);
			var updatedElement = (0, _extends3.default)({}, updatedControls[fromIdentifier]);
			updatedElement.value = event.target.value;
			updatedControls[fromIdentifier] = updatedElement;
			// console.log(updatedControls[fromIdentifier].value);
			_this.setState({ controls: updatedControls });
		}, _this.checkWeather = function () {
			_this.props.onCheckWeather(_this.state.controls.address.value, function (data) {
				// Set Socket Event
				// console.log('PROPS', this.props.socket );
				(0, _api.createMessage)(data);
			});
		}, _this.getControls = function () {
			var controlsArray = [];
			for (var key in _this.state.controls) {
				controlsArray.push((0, _extends3.default)({ id: key }, _this.state.controls[key]));
			}

			var postControls = controlsArray.map(function (control) {
				return _react2.default.createElement(_Input2.default, (0, _extends3.default)({ key: control.id }, control, { changed: function changed(event) {
						return _this.changedHandler(event, control.id);
					}, __source: {
						fileName: _jsxFileName,
						lineNumber: 55
					}
				}));
			});

			return postControls;
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(SearchWeather, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _api.subscribeToNewMessage)(function (err, message) {
				console.log(message);
				_this2.props.onSetWeather(message);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var weatherResult = null;
			var getWeatherResult = function getWeatherResult() {
				if (_this3.props.weather.weathers.length > 0) {
					weatherResult = _this3.props.weather.weathers.map(function (weather) {
						return _react2.default.createElement('div', { key: weather.address, __source: {
								fileName: _jsxFileName,
								lineNumber: 66
							}
						}, _react2.default.createElement('p', {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 67
							}
						}, 'Address: ', weather.address), _react2.default.createElement('p', {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 68
							}
						}, 'Latitude: ', weather.lat), _react2.default.createElement('p', {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 69
							}
						}, 'Longitude: ', weather.lng), _react2.default.createElement('hr', {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 70
							}
						}));
					});
				}
				return weatherResult;
			};

			var getMessage = function getMessage() {
				if (_this3.props.weather.message) {
					return _this3.props.weather.message;
				}
				return null;
			};

			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, this.getControls(), _react2.default.createElement(_Button2.default, { label: 'Check', fullWidth: true, primary: true, onClick: this.checkWeather, __source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}), getWeatherResult(), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}));
		}
	}]);

	return SearchWeather;
}(_react.Component);

;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		onCheckWeather: function onCheckWeather(address, callback) {
			return dispatch(actionCreator.checkWeather({ address: address, callback: callback }));
		},
		onSetWeather: function onSetWeather(weather) {
			return dispatch(actionCreator.setWeather(weather));
		}
	};
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		weather: state.weather
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchWeather);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdlYXRoZXJcXHNlYXJjaFdlYXRoZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJbnB1dCIsIkJ1dHRvbiIsImFjdGlvbkNyZWF0b3IiLCJjb25uZWN0IiwiY3JlYXRlTWVzc2FnZSIsInN1YnNjcmliZVRvTmV3TWVzc2FnZSIsIlNlYXJjaFdlYXRoZXIiLCJzdGF0ZSIsImNvbnRyb2xzIiwiZWxlbWVudFR5cGUiLCJlbGVtZW50Q29uZmlnIiwiZnVsbFdpZHRoIiwiaGludFRleHQiLCJ2YWx1ZSIsImNoYW5nZWRIYW5kbGVyIiwiZXZlbnQiLCJmcm9tSWRlbnRpZmllciIsInVwZGF0ZWRDb250cm9scyIsInVwZGF0ZWRFbGVtZW50IiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJjaGVja1dlYXRoZXIiLCJwcm9wcyIsIm9uQ2hlY2tXZWF0aGVyIiwiYWRkcmVzcyIsImRhdGEiLCJnZXRDb250cm9scyIsImNvbnRyb2xzQXJyYXkiLCJrZXkiLCJwdXNoIiwiaWQiLCJwb3N0Q29udHJvbHMiLCJtYXAiLCJjb250cm9sIiwiZXJyIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJvblNldFdlYXRoZXIiLCJ3ZWF0aGVyUmVzdWx0IiwiZ2V0V2VhdGhlclJlc3VsdCIsIndlYXRoZXIiLCJ3ZWF0aGVycyIsImxlbmd0aCIsImxhdCIsImxuZyIsImdldE1lc3NhZ2UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjYWxsYmFjayIsImRpc3BhdGNoIiwic2V0V2VhdGhlciIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7SUFBUCxBQUFZLEFBQW1COztBQUMvQixBQUFTOztBQUNULEFBQVMsQUFBZSxBQUE2Qjs7Ozs7Ozs7O0lBRS9DLEE7Ozs7Ozs7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O2lCQUFBLEFBQ0U7QUFERjtBQUFBLElBQUEsT0FBQSxBQUNFLEFBQUssQUFDTiwrQkFBQSxBQUFDLGtDQUFPLE9BQVIsQUFBYyxTQUFRLFdBQXRCLEFBQWlDLE1BQU0sU0FBdkMsQUFBZ0QsTUFBTSxTQUFTLEtBQS9ELEFBQW9FO2VBQXBFO2lCQUZELEFBRUMsQUFDRztBQURIO09BRkQsQUFJQzs7ZUFBQTtpQkFMSCxBQUNFLEFBSUMsQUFHSDtBQUhHO0FBQUE7Ozs7O0EsQUFsRnVCOztBQXNGM0I7O0FBRUQsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsNkJBQVksQUFDdEM7O2tCQUNpQix3QkFBQSxBQUFFLFNBQUYsQUFBVyxVQUFYO1VBQXlCLFNBQVMsY0FBQSxBQUFjLGFBQWMsRUFBQyxTQUFELEFBQVUsU0FBUSxVQUFoRixBQUF5QixBQUFTLEFBQTRCLEFBQTRCO0FBRHBHLEFBRU47Z0JBQWMsc0JBQUEsQUFBRSxTQUFGO1VBQWUsU0FBUyxjQUFBLEFBQWMsV0FBdEMsQUFBZSxBQUFTLEFBQTBCO0FBRmpFLEFBQU8sQUFJUDtBQUpPLEFBQ047QUFGRjs7QUFPQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBUyxBQUNoQzs7V0FDVSxNQURWLEFBQU8sQUFDUyxBQUVoQjtBQUhPLEFBQ047QUFGRixBQU1BOztrQkFBZSx5QkFBQSxBQUFRLGlCQUFSLEFBQXlCLG9CQUF4QyxBQUFlLEFBQTZDIiwiZmlsZSI6InNlYXJjaFdlYXRoZXIuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvUmVhY3QvbXktYmxvZyJ9