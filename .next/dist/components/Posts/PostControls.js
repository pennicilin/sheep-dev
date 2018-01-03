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

var _Auxs = require('../hoc/Auxs');

var _Auxs2 = _interopRequireDefault(_Auxs);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _initStore = require('../../store/initStore');

var _initStore2 = _interopRequireDefault(_initStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\React\\my-blog\\components\\Posts\\PostControls.js';


var PostControls = function (_Component) {
	(0, _inherits3.default)(PostControls, _Component);

	function PostControls() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PostControls);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostControls.__proto__ || (0, _getPrototypeOf2.default)(PostControls)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			controls: {
				'title': {
					elementType: 'inputText',
					elementConfig: {
						fullWidth: true,
						hintText: 'ชื่อบทความ'
					},
					value: ''
				},
				'content': {
					elementType: 'inputText',
					elementConfig: {
						fullWidth: true,
						hintText: 'รายละเอียด',
						multiLine: true,
						rows: 4,
						rowsMax: 8
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

	(0, _createClass3.default)(PostControls, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('Component Did Mount', this.state.controls.title);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(_Auxs2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement('div', { style: { width: '80%', margin: 'auto' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, this.getControls(), _react2.default.createElement(_Button2.default, { label: '\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21', fullWidth: true, primary: true, onClick: function onClick() {
					return _this2.props.postSubmitHandler(_this2.state.controls);
				}, __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			})));
		}
	}]);

	return PostControls;
}(_react.Component);

;

exports.default = PostControls;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvc3RzXFxQb3N0Q29udHJvbHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJbnB1dCIsIkJ1dHRvbiIsIkF1eCIsIndpdGhSZWR1eCIsImluaXRTdG9yZSIsIlBvc3RDb250cm9scyIsInN0YXRlIiwiY29udHJvbHMiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRDb25maWciLCJmdWxsV2lkdGgiLCJoaW50VGV4dCIsInZhbHVlIiwibXVsdGlMaW5lIiwicm93cyIsInJvd3NNYXgiLCJjaGFuZ2VkSGFuZGxlciIsImV2ZW50IiwiZnJvbUlkZW50aWZpZXIiLCJ1cGRhdGVkQ29udHJvbHMiLCJ1cGRhdGVkRWxlbWVudCIsInRhcmdldCIsInNldFN0YXRlIiwiZ2V0Q29udHJvbHMiLCJjb250cm9sc0FycmF5Iiwia2V5IiwicHVzaCIsImlkIiwicG9zdENvbnRyb2xzIiwibWFwIiwiY29udHJvbCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIndpZHRoIiwibWFyZ2luIiwicHJvcHMiLCJwb3N0U3VibWl0SGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWU7Ozs7Ozs7OztJQUVoQixBOzs7Ozs7Ozs7Ozs7OztzTixBQUVMOzs7a0JBRVksQUFDSSxBQUNiOztpQkFBZSxBQUNILEFBQ1g7Z0JBSlEsQUFFTSxBQUVKLEFBRVg7QUFKZSxBQUNkO1lBSlEsQUFDQSxBQU1GLEFBRVI7QUFSVSxBQUNUOztrQkFPVyxBQUNFLEFBQ2I7O2lCQUFlLEFBQ0gsQUFDWDtnQkFGYyxBQUVKLEFBQ1Y7aUJBSGMsQUFHSCxBQUNYO1lBSmMsQUFJUixBQUNOO2VBUFUsQUFFSSxBQUtMLEFBRVY7QUFQZSxBQUNkO1ksQUFiSSxBQUNJLEFBU0UsQUFTSjtBQVRJLEFBQ1g7QUFWUyxBQUNWO0FBRk0sQUFDUCxXLEFBMkJELGlCQUFpQixVQUFBLEFBQUUsT0FBRixBQUFTLGdCQUFvQixBQUM3QztBQUNBO09BQU0sNkNBQXNCLE1BQUEsQUFBSyxNQUFqQyxBQUFNLEFBQWlDLEFBQ3ZDO09BQUssNENBQXFCLGdCQUExQixBQUFLLEFBQXFCLEFBQWdCLEFBQzFDO2tCQUFBLEFBQWUsUUFBUSxNQUFBLEFBQU0sT0FBN0IsQUFBb0MsQUFDcEM7bUJBQUEsQUFBZ0Isa0JBQWhCLEFBQWtDLEFBQ2xDO0FBQ0E7U0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFmLEFBQWMsQUFBVyxBQUN6QjtBLFdBRUQsQSxjQUFjLFlBQU0sQUFDbkI7T0FBSSxnQkFBSixBQUFvQixBQUNwQjtRQUFNLElBQU4sQUFBVSxPQUFPLE1BQUEsQUFBSyxNQUF0QixBQUE0QixVQUFXLEFBQ3RDO2tCQUFBLEFBQWMsOEJBQU0sSUFBcEIsQUFBd0IsT0FBTyxNQUFBLEFBQUssTUFBTCxBQUFXLFNBQTFDLEFBQStCLEFBQW9CLEFBQ25EO0FBRUQ7O09BQU0sNkJBQWUsQUFBYyxJQUFLLG1CQUFBOzJCQUN2QyxBQUFDLHdEQUFNLEtBQUssUUFBWixBQUFvQixNQUFwQixBQUE0QixXQUFTLFNBQVMsaUJBQUEsQUFBRSxPQUFGO2FBQWEsTUFBQSxBQUFLLGVBQUwsQUFBcUIsT0FBTSxRQUF4QyxBQUFhLEFBQW1DO0FBQTlGO2dCQUFBO2tCQUR1QyxBQUN2QztBQUFBO01BQUE7QUFERCxBQUFxQixBQUlyQixJQUpxQjs7VUFJckIsQUFBTyxBQUNQO0E7Ozs7O3NDQXpCbUIsQUFDbkI7V0FBQSxBQUFRLElBQVIsQUFBWSx1QkFBdUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUE5QyxBQUF1RCxBQUN2RDs7OzsyQkF5QlE7Z0JBQ1I7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBLFNBQUssT0FBTyxFQUFDLE9BQUQsQUFBUSxPQUFNLFFBQTFCLEFBQVksQUFBc0I7ZUFBbEM7aUJBQUEsQUFDRTtBQURGO1dBQUEsQUFDRSxBQUFLLEFBQ04sK0JBQUEsQUFBQyxrQ0FBTyxPQUFSLEFBQWMsc0VBQWMsV0FBNUIsQUFBdUMsTUFBTSxTQUE3QyxBQUFzRCxNQUFNLFNBQVMsbUJBQUE7WUFBTSxPQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFrQixPQUFBLEFBQUssTUFBeEMsQUFBTSxBQUF3QztBQUFuSDtlQUFBO2lCQUpILEFBQ0MsQUFDQyxBQUVDLEFBS0g7QUFMRzs7Ozs7O0EsQUExRHNCOztBQWdFMUIsQUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJQb3N0Q29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvUmVhY3QvbXktYmxvZyJ9