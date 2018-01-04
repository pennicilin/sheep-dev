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
			_this.props.onCheckWeather(_this.state.controls.address.value);
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
						lineNumber: 42
					}
				}));
			});

			return postControls;
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(SearchWeather, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var getWeather = function getWeather() {
				var weathers = _this2.props.weather.weathers.map(function (weather) {
					return _react2.default.createElement('div', { key: weather.address, __source: {
							fileName: _jsxFileName,
							lineNumber: 52
						}
					}, _react2.default.createElement('p', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 53
						}
					}, 'Address: ', weather.address), _react2.default.createElement('p', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 54
						}
					}, 'Latitude: ', weather.lat), _react2.default.createElement('p', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 55
						}
					}, 'Longitude: ', weather.lng), _react2.default.createElement('hr', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 56
						}
					}));
				});
				return weathers;
			};

			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, this.getControls(), _react2.default.createElement(_Button2.default, { label: 'Check', fullWidth: true, primary: true, onClick: this.checkWeather, __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}), this.props.weather.weathers.length > 0 ? getWeather() : _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}));
		}
	}]);

	return SearchWeather;
}(_react.Component);

;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		onCheckWeather: function onCheckWeather(address) {
			return dispatch(actionCreator.checkWeather({ address: address }));
		}
	};
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		weather: state.weather
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchWeather);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdlYXRoZXJcXHNlYXJjaFdlYXRoZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJbnB1dCIsIkJ1dHRvbiIsImFjdGlvbkNyZWF0b3IiLCJjb25uZWN0IiwiU2VhcmNoV2VhdGhlciIsInN0YXRlIiwiY29udHJvbHMiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRDb25maWciLCJmdWxsV2lkdGgiLCJoaW50VGV4dCIsInZhbHVlIiwiY2hhbmdlZEhhbmRsZXIiLCJldmVudCIsImZyb21JZGVudGlmaWVyIiwidXBkYXRlZENvbnRyb2xzIiwidXBkYXRlZEVsZW1lbnQiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsImNoZWNrV2VhdGhlciIsInByb3BzIiwib25DaGVja1dlYXRoZXIiLCJhZGRyZXNzIiwiZ2V0Q29udHJvbHMiLCJjb250cm9sc0FycmF5Iiwia2V5IiwicHVzaCIsImlkIiwicG9zdENvbnRyb2xzIiwibWFwIiwiY29udHJvbCIsImdldFdlYXRoZXIiLCJ3ZWF0aGVycyIsIndlYXRoZXIiLCJsYXQiLCJsbmciLCJsZW5ndGgiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7SUFBUCxBQUFZLEFBQW1COztBQUMvQixBQUFTOzs7Ozs7Ozs7SUFFSCxBOzs7Ozs7Ozs7Ozs7Ozt3TkFDTCxBOzs7a0JBRWMsQUFDRSxBQUNiOztpQkFBZSxBQUNILEFBQ1g7Z0JBSlUsQUFFSSxBQUVKLEFBRVg7QUFKZSxBQUNkO1lBTEksQUFDSSxBQUNFLEFBTUosQTtBQU5JLEFBQ1g7QUFGUyxBQUNWO0FBRk0sQUFDUCxXQVlELEEsaUJBQWlCLFVBQUEsQUFBRSxPQUFGLEFBQVMsZ0JBQW9CLEFB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