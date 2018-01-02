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

var _Auxs = require('../hoc/Auxs');

var _Auxs2 = _interopRequireDefault(_Auxs);

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
						hintText: 'รายละเอียด'
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
			console.log(updatedControls[fromIdentifier].value);
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
						lineNumber: 49
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
			return _react2.default.createElement(_Auxs2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement('div', { style: { width: '80%', margin: 'auto' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, this.getControls()), _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, this.state.controls.title.value));
		}
	}]);

	return PostControls;
}(_react.Component);

;

exports.default = PostControls;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvc3RzXFxQb3N0Q29udHJvbHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJbnB1dCIsIkF1eCIsIlBvc3RDb250cm9scyIsInN0YXRlIiwiY29udHJvbHMiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRDb25maWciLCJmdWxsV2lkdGgiLCJoaW50VGV4dCIsInZhbHVlIiwiY2hhbmdlZEhhbmRsZXIiLCJldmVudCIsImZyb21JZGVudGlmaWVyIiwidXBkYXRlZENvbnRyb2xzIiwidXBkYXRlZEVsZW1lbnQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJnZXRDb250cm9scyIsImNvbnRyb2xzQXJyYXkiLCJrZXkiLCJwdXNoIiwiaWQiLCJwb3N0Q29udHJvbHMiLCJtYXAiLCJjb250cm9sIiwidGl0bGUiLCJ3aWR0aCIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVM7Ozs7Ozs7OztJQUVWLEE7Ozs7Ozs7Ozs7Ozs7O3NOLEFBRUw7OztrQkFFWSxBQUNJLEFBQ2I7O2lCQUFlLEFBQ0gsQUFDWDtnQkFKUSxBQUVNLEFBRUosQUFFWDtBQUplLEFBQ2Q7WUFKUSxBQUNBLEFBTUYsQUFFUjtBQVJVLEFBQ1Q7O2tCQU9XLEFBQ0UsQUFDYjs7aUJBQWUsQUFDSCxBQUNYO2dCQUpVLEFBRUksQUFFSixBQUVYO0FBSmUsQUFDZDtZQWJJLEFBQ0ksQUFTRSxBQU1KLEE7QUFOSSxBQUNYO0FBVlMsQUFDVjtBQUZNLEFBQ1AsVyxBQXdCRCxpQkFBaUIsVUFBQSxBQUFFLE9BQUYsQUFBUyxnQkFBb0IsQUFDN0M7QUFDQTtPQUFNLDZDQUFzQixNQUFBLEFBQUssTUFBakMsQUFBTSxBQUFpQyxBQUN2QztPQUFLLDRDQUFxQixnQkFBMUIsQUFBSyxBQUFxQixBQUFnQixBQUMxQztrQkFBQSxBQUFlLFFBQVEsTUFBQSxBQUFNLE9BQTdCLEFBQW9DLEFBQ3BDO21CQUFBLEFBQWdCLGtCQUFoQixBQUFrQyxBQUNsQztXQUFBLEFBQVEsSUFBSSxnQkFBQSxBQUFnQixnQkFBNUIsQUFBNEMsQUFDNUM7U0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFmLEFBQWMsQUFBVyxBQUN6QjtBLFdBRUQsQSxjQUFjLFlBQU0sQUFDbkI7T0FBSSxnQkFBSixBQUFvQixBQUNwQjtRQUFNLElBQU4sQUFBVSxPQUFPLE1BQUEsQUFBSyxNQUF0QixBQUE0QixVQUFXLEFBQ3RDO2tCQUFBLEFBQWMsOEJBQU0sSUFBcEIsQUFBd0IsT0FBTyxNQUFBLEFBQUssTUFBTCxBQUFXLFNBQTFDLEFBQStCLEFBQW9CLEFBQ25EO0FBRUQ7O09BQU0sNkJBQWUsQUFBYyxJQUFLLG1CQUFBOzJCQUN2QyxBQUFDLHdEQUFNLEtBQUssUUFBWixBQUFvQixNQUFwQixBQUE0QixXQUFTLFNBQVMsaUJBQUEsQUFBRSxPQUFGO2FBQWEsTUFBQSxBQUFLLGVBQUwsQUFBcUIsT0FBTSxRQUF4QyxBQUFhLEFBQW1DO0FBQTlGO2dCQUFBO2tCQUR1QyxBQUN2QztBQUFBO01BQUE7QUFERCxBQUFxQixBQUlyQixJQUpxQjs7VUFJckIsQUFBTyxBQUNQO0E7Ozs7O3NDQXpCbUIsQUFDbkI7V0FBQSxBQUFRLElBQVIsQUFBWSx1QkFBdUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUE5QyxBQUF1RCxBQUN2RDs7OzsyQkF5QlEsQUFDUjswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQSxTQUFLLE9BQU8sRUFBQyxPQUFELEFBQVEsT0FBTSxRQUExQixBQUFZLEFBQXNCO2VBQWxDO2lCQUFBLEFBQTRDO0FBQTVDO1dBREQsQUFDQyxBQUE0QyxBQUFLLEFBQ2pELGdDQUFBLGNBQUE7O2VBQUE7aUJBQUEsQUFBTTtBQUFOO0FBQUEsV0FBTSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLE1BSDVCLEFBQ0MsQUFFQyxBQUFnQyxBQUdsQzs7Ozs7QUF6RHlCLEE7O0FBMEQxQixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IlBvc3RDb250cm9scy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9SZWFjdC9teS1ibG9nIn0=