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
	weathers: [],
	message: null,
	socket: null
};

var reducer = function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = void 0;
	switch (action.type) {
		case actionTypes.SET_WEATHER:
			// console.log("PAYLOAD",action.payload);
			newState = (0, _extends3.default)({}, state);
			newState.weathers = [];
			newState.weathers.push(action.payload.weather);
			return newState;

		case actionTypes.SET_WEATHER_END:
			newState = (0, _extends3.default)({}, state);
			newState.message = action.payload.message;
			return newState;

		case actionTypes.UPDATE_WEATHER:
			newState = (0, _extends3.default)({}, state);
			newState.socket = action.payload.socket;
			return newState;

	}
	return state;
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdlYXRoZXJcXHN0b3JlXFxyZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwiYWN0aW9uQ3JlYXRvciIsImluaXRpYWxTdGF0ZSIsIndlYXRoZXJzIiwibWVzc2FnZSIsInNvY2tldCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm5ld1N0YXRlIiwidHlwZSIsIlNFVF9XRUFUSEVSIiwicHVzaCIsInBheWxvYWQiLCJ3ZWF0aGVyIiwiU0VUX1dFQVRIRVJfRU5EIiwiVVBEQVRFX1dFQVRIRVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVksQUFBaUI7O0FBQzdCLEFBQU87O0lBQVAsQUFBWSxBQUFtQjs7Ozs7O0FBRS9CLElBQU07V0FBZSxBQUNOLEFBQ1Y7VUFGZ0IsQUFFUCxBQUNUO1NBSEwsQUFBcUIsQUFHUjtBQUhRLEFBQ2hCOztBQUtMLElBQU0sVUFBVSxTQUFWLEFBQVUsVUFBa0M7S0FBakMsQUFBaUMsNEVBQXpCLEFBQXlCO0tBQVgsQUFBVyxtQkFDakQ7O0tBQUksZ0JBQUosQUFDQTtTQUFTLE9BQVQsQUFBZ0IsQUFDZjtPQUFLLFlBQUwsQUFBaUIsQUFDaEI7QUFDQTt5Q0FBQSxBQUFlLEFBQ2Y7WUFBQSxBQUFTLFdBQVQsQUFBb0IsQUFDcEI7WUFBQSxBQUFTLFNBQVQsQUFBa0IsS0FBSyxPQUFBLEFBQU8sUUFBOUIsQUFBc0MsQUFDdEM7VUFBQSxBQUFPLEFBRVI7O09BQUssWUFBTCxBQUFpQixBQUNoQjt5Q0FBQSxBQUFlLEFBQ2Y7WUFBQSxBQUFTLFVBQVUsT0FBQSxBQUFPLFFBQTFCLEFBQWtDLEFBQ2xDO1VBQUEsQUFBTyxBQUVSOztPQUFLLFlBQUwsQUFBaUIsQUFDaEI7eUNBQUEsQUFBZSxBQUNmO1lBQUEsQUFBUyxTQUFTLE9BQUEsQUFBTyxRQUF6QixBQUFpQyxBQUNqQztVQWhCRixBQWdCRSxBQUFPLEFBR1Q7OztRQUFBLEFBQU8sQUFDUDtBQXRCRCxBQXdCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL1JlYWN0L215LWJsb2cifQ==