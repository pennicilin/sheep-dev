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
						lineNumber: 53
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
					lineNumber: 61
				}
			}, _react2.default.createElement('div', { style: { width: '80%', margin: 'auto' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, this.getControls(), _react2.default.createElement(_Button2.default, { label: '\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21', fullWidth: true, primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			})));
		}
	}]);

	return PostControls;
}(_react.Component);

;

exports.default = PostControls;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvc3RzXFxQb3N0Q29udHJvbHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJbnB1dCIsIkJ1dHRvbiIsIkF1eCIsIlBvc3RDb250cm9scyIsInN0YXRlIiwiY29udHJvbHMiLCJlbGVtZW50VHlwZSIsImVsZW1lbnRDb25maWciLCJmdWxsV2lkdGgiLCJoaW50VGV4dCIsInZhbHVlIiwibXVsdGlMaW5lIiwicm93cyIsInJvd3NNYXgiLCJjaGFuZ2VkSGFuZGxlciIsImV2ZW50IiwiZnJvbUlkZW50aWZpZXIiLCJ1cGRhdGVkQ29udHJvbHMiLCJ1cGRhdGVkRWxlbWVudCIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImdldENvbnRyb2xzIiwiY29udHJvbHNBcnJheSIsImtleSIsInB1c2giLCJpZCIsInBvc3RDb250cm9scyIsIm1hcCIsImNvbnRyb2wiLCJ0aXRsZSIsIndpZHRoIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBRVY7Ozs7Ozs7Ozs7Ozs7O3NOLEFBRUw7OztrQkFFWSxBQUNJLEFBQ2I7O2lCQUFlLEFBQ0gsQUFDWDtnQkFKUSxBQUVNLEFBRUosQUFFWDtBQUplLEFBQ2Q7WUFKUSxBQUNBLEFBTUYsQUFFUjtBQVJVLEFBQ1Q7O2tCQU9XLEFBQ0UsQUFDYjs7aUJBQWUsQUFDSCxBQUNYO2dCQUZjLEFBRUosQUFDVjtpQkFIYyxBQUdILEFBQ1g7WUFKYyxBQUlSLEFBQ047ZUFQVSxBQUVJLEFBS0wsQUFFVjtBQVBlLEFBQ2Q7WSxBQWJJLEFBQ0ksQUFTRSxBQVNKO0FBVEksQUFDWDtBQVZTLEFBQ1Y7QUFGTSxBQUNQLFcsQUEyQkQsaUJBQWlCLFVBQUEsQUFBRSxPQUFGLEFBQVMsZ0JBQW9CLEFBQzdDO0FBQ0E7T0FBTSw2Q0FBc0IsTUFBQSxBQUFLLE1BQWpDLEFBQU0sQUFBaUMsQUFDdkM7T0FBSyw0Q0FBcUIsZ0JBQTFCLEFBQUssQUFBcUIsQUFBZ0IsQUFDMUM7a0JBQUEsQUFBZSxRQUFRLE1BQUEsQUFBTSxPQUE3QixBQUFvQyxBQUNwQzttQkFBQSxBQUFnQixrQkFBaEIsQUFBa0MsQUFDbEM7V0FBQSxBQUFRLElBQUksZ0JBQUEsQUFBZ0IsZ0JBQTVCLEFBQTRDLEFBQzVDO1NBQUEsQUFBSyxTQUFTLEVBQUMsVUFBZixBQUFjLEFBQVcsQUFDekI7QSxXLEFBRUQsY0FBYyxZQUFNLEFBQ25CO09BQUksZ0JBQUosQUFBb0IsQUFDcEI7UUFBTSxJQUFOLEFBQVUsT0FBTyxNQUFBLEFBQUssTUFBdEIsQUFBNEIsVUFBVyxBQUN0QztrQkFBQSxBQUFjLDhCQUFNLElBQXBCLEFBQXdCLE9BQU8sTUFBQSxBQUFLLE1BQUwsQUFBVyxTQUExQyxBQUErQixBQUFvQixBQUNuRDtBQUVEOztPQUFNLDZCQUFlLEFBQWMsSUFBSyxtQkFBQTsyQkFDdkMsQUFBQyx3REFBTSxLQUFLLFFBQVosQUFBb0IsTUFBcEIsQUFBNEIsV0FBUyxTQUFTLGlCQUFBLEFBQUUsT0FBRjthQUFhLE1BQUEsQUFBSyxlQUFMLEFBQXFCLE9BQU0sUUFBeEMsQUFBYSxBQUFtQztBQUE5RjtnQkFBQTtrQkFEdUMsQUFDdkM7QUFBQTtNQUFBO0FBREQsQUFBcUIsQUFJckIsSUFKcUI7O1VBSXJCLEFBQU8sQUFDUDtBOzs7OztzQ0F6Qm1CLEFBQ25CO1dBQUEsQUFBUSxJQUFSLEFBQVksdUJBQXVCLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBOUMsQUFBdUQsQUFDdkQ7Ozs7MkJBeUJRLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUEsU0FBSyxPQUFPLEVBQUMsT0FBRCxBQUFRLE9BQU0sUUFBMUIsQUFBWSxBQUFzQjtlQUFsQztpQkFBQSxBQUNFO0FBREY7V0FBQSxBQUNFLEFBQUssQUFDTiwrQkFBQSxBQUFDLGtDQUFPLE9BQVIsQUFBYyxzRUFBYyxXQUE1QixBQUF1QyxNQUFNLFNBQTdDLEFBQXNEO2VBQXREO2lCQUpILEFBQ0MsQUFDQyxBQUVDLEFBS0g7QUFMRzs7Ozs7O0EsQUExRHNCOztBQWdFMUIsQUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJQb3N0Q29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvUmVhY3QvbXktYmxvZyJ9