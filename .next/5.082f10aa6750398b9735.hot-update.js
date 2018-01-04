webpackHotUpdate(5,{

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Input = __webpack_require__(445);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(407);

var _Button2 = _interopRequireDefault(_Button);

var _actionCreator = __webpack_require__(411);

var actionCreator = _interopRequireWildcard(_actionCreator);

var _reactRedux = __webpack_require__(418);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Projects\\React\\my-blog\\components\\Weather\\searchWeather.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Projects\\React\\my-blog\\components\\Weather\\searchWeather.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wODJmMTBhYTY3NTAzOThiOTczNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XZWF0aGVyL3NlYXJjaFdlYXRoZXIuanM/NmM3MGZlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL1RoZW1lcy9CbG9nL1VJL0lucHV0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9UaGVtZXMvQmxvZy9VSS9CdXR0b24nO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9yIGZyb20gJy4vc3RvcmUvYWN0aW9uQ3JlYXRvcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBTZWFyY2hXZWF0aGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRzdGF0ZSA9IHtcclxuXHRcdGNvbnRyb2xzIDoge1xyXG5cdFx0XHQnYWRkcmVzcycgOiB7XHJcblx0XHRcdFx0ZWxlbWVudFR5cGU6ICdpbnB1dFRleHQnLFxyXG5cdFx0XHRcdGVsZW1lbnRDb25maWc6IHtcclxuXHRcdFx0XHRcdGZ1bGxXaWR0aDogdHJ1ZSxcclxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnQWRkcmVzcycsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWx1ZTogJydcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNoYW5nZWRIYW5kbGVyID0gKCBldmVudCwgZnJvbUlkZW50aWZpZXIgKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyggZXZlbnQudGFyZ2V0LnZhbHVlLCBmcm9tSWRlbnRpZmllciApO1xyXG5cdFx0Y29uc3QgdXBkYXRlZENvbnRyb2xzID0gey4uLnRoaXMuc3RhdGUuY29udHJvbHN9O1xyXG5cdFx0bGV0ICB1cGRhdGVkRWxlbWVudCA9IHsuLi51cGRhdGVkQ29udHJvbHNbZnJvbUlkZW50aWZpZXJdfVxyXG5cdFx0dXBkYXRlZEVsZW1lbnQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblx0XHR1cGRhdGVkQ29udHJvbHNbZnJvbUlkZW50aWZpZXJdID0gdXBkYXRlZEVsZW1lbnQ7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh1cGRhdGVkQ29udHJvbHNbZnJvbUlkZW50aWZpZXJdLnZhbHVlKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe2NvbnRyb2xzOiB1cGRhdGVkQ29udHJvbHN9KTtcclxuXHR9O1xyXG5cclxuXHRjaGVja1dlYXRoZXIgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnByb3BzLm9uQ2hlY2tXZWF0aGVyKCB0aGlzLnN0YXRlLmNvbnRyb2xzLmFkZHJlc3MudmFsdWUgKTtcclxuXHR9O1xyXG5cclxuXHRnZXRDb250cm9scyA9ICgpID0+IHtcclxuXHRcdGxldCBjb250cm9sc0FycmF5ID0gW107XHJcblx0XHRmb3IgKCBsZXQga2V5IGluIHRoaXMuc3RhdGUuY29udHJvbHMgKSB7XHJcblx0XHRcdGNvbnRyb2xzQXJyYXkucHVzaCh7aWQ6IGtleSwuLi50aGlzLnN0YXRlLmNvbnRyb2xzW2tleV19KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBwb3N0Q29udHJvbHMgPSBjb250cm9sc0FycmF5Lm1hcCggY29udHJvbCA9PiAoXHJcblx0XHRcdDxJbnB1dCBrZXk9e2NvbnRyb2wuaWR9IHsuLi5jb250cm9sfSBjaGFuZ2VkPXsoIGV2ZW50ICkgPT4gdGhpcy5jaGFuZ2VkSGFuZGxlciggZXZlbnQsY29udHJvbC5pZCApfSAvPlxyXG5cdFx0KSk7XHJcblxyXG5cdFx0cmV0dXJuIHBvc3RDb250cm9scztcclxuXHR9O1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblxyXG5cdFx0Y29uc3QgZ2V0V2VhdGhlciA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3Qgd2VhdGhlcnMgPSB0aGlzLnByb3BzLndlYXRoZXIud2VhdGhlcnMubWFwKCB3ZWF0aGVyID0+IChcclxuXHRcdFx0XHRcdDxkaXYga2V5PXsgd2VhdGhlci5hZGRyZXNzIH0+XHJcblx0XHRcdFx0XHRcdDxwPkFkZHJlc3M6IHsgd2VhdGhlci5hZGRyZXNzIH08L3A+XHJcblx0XHRcdFx0XHRcdDxwPkxhdGl0dWRlOiB7IHdlYXRoZXIubGF0IH08L3A+XHJcblx0XHRcdFx0XHRcdDxwPkxvbmdpdHVkZTogeyB3ZWF0aGVyLmxuZyB9PC9wPlxyXG5cdFx0XHRcdFx0XHQ8aHI+PC9ocj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQpKTtcclxuXHRcdFx0cmV0dXJuIHdlYXRoZXJzO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHR7dGhpcy5nZXRDb250cm9scygpfVxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBsYWJlbD1cIkNoZWNrXCIgZnVsbFdpZHRoPXt0cnVlfSBwcmltYXJ5PXt0cnVlfSBvbkNsaWNrPXt0aGlzLmNoZWNrV2VhdGhlcn0gLz5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0KCB0aGlzLnByb3BzLndlYXRoZXIud2VhdGhlcnMubGVuZ3RoID4gMCApID8gZ2V0V2VhdGhlcigpIDogPHA+PC9wPlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdG9uQ2hlY2tXZWF0aGVyOiAoIGFkZHJlc3MgKSA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmNoZWNrV2VhdGhlcigge2FkZHJlc3M6IGFkZHJlc3N9ICkpXHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR3ZWF0aGVyOiBzdGF0ZS53ZWF0aGVyXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VhcmNoV2VhdGhlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9XZWF0aGVyL3NlYXJjaFdlYXRoZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOztBQUVBO0FBRUE7QUFIQTs7QUFGQTtBQURBO0FBREE7QUFjQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBOzs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUlBO0FBSkE7QUFBQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUZBO0FBQ0E7QUFLQTs7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQURBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=