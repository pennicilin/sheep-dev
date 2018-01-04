'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = require('./actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

var _actionCreator = require('./actionCreator');

var actionCreator = _interopRequireWildcard(_actionCreator);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	weathers: []
};

var reducer = function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = void 0;
	switch (action.type) {
		case actionTypes.SET_WEATHER:
			console.log("PAYLOAD", action.payload);
			newState = (0, _extends3.default)({}, state);
			newState.weathers.push(action.payload.weather);
			return newState;

	}
	return state;
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdlYXRoZXJcXHN0b3JlXFxyZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwiYWN0aW9uQ3JlYXRvciIsImluaXRpYWxTdGF0ZSIsIndlYXRoZXJzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJ0eXBlIiwiU0VUX1dFQVRIRVIiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInB1c2giLCJ3ZWF0aGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZLEFBQWlCOztBQUM3QixBQUFPOztJQUFQLEFBQVksQUFBbUI7Ozs7OztBQUUvQixJQUFNO1dBQU4sQUFBcUIsQUFDTjtBQURNLEFBQ2hCOztBQUdMLElBQU0sVUFBVSxTQUFWLEFBQVUsVUFBa0M7S0FBakMsQUFBaUMsNEVBQXpCLEFBQXlCO0tBQVgsQUFBVyxtQkFDakQ7O0tBQUksZ0JBQUosQUFDQTtTQUFTLE9BQVQsQUFBZ0IsQUFDZjtPQUFLLFlBQUwsQUFBaUIsQUFDaEI7V0FBQSxBQUFRLElBQVIsQUFBWSxXQUFVLE9BQXRCLEFBQTZCLEFBQzdCO3lDQUFBLEFBQWUsQUFDZjtZQUFBLEFBQVMsU0FBVCxBQUFrQixLQUFLLE9BQUEsQUFBTyxRQUE5QixBQUFzQyxBQUN0QztVQUxGLEFBS0UsQUFBTyxBQUdUOzs7UUFBQSxBQUFPLEFBQ1A7QUFYRCxBQWFBOztrQkFBQSxBQUFlIiwiZmlsZSI6InJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvUmVhY3QvbXktYmxvZyJ9