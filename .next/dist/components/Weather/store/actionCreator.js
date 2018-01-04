'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.checkWeather = exports.setWeather = undefined;

var _actionTypes = require('./actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setWeather = exports.setWeather = function setWeather(payload) {
	return {
		type: actionTypes.SET_WEATHER,
		payload: payload
	};
};

var checkWeather = exports.checkWeather = function checkWeather(payload) {
	console.log(payload);
	return function (dispatch) {
		_axios2.default.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + payload.address).then(function (response) {
			console.log(response.data);
			var responseData = response.data;
			var locationInfo = {
				address: responseData.results[0].formatted_address,
				lat: responseData.results[0].geometry.location.lat,
				lng: responseData.results[0].geometry.location.lng
			};
			dispatch(setWeather({ weather: locationInfo }));
		}).catch(function (error) {
			console.log(error);
		});
	};
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdlYXRoZXJcXHN0b3JlXFxhY3Rpb25DcmVhdG9yLmpzIl0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwiYXhpb3MiLCJzZXRXZWF0aGVyIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfV0VBVEhFUiIsImNoZWNrV2VhdGhlciIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJhZGRyZXNzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3BvbnNlRGF0YSIsImxvY2F0aW9uSW5mbyIsInJlc3VsdHMiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImxhdCIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJsbmciLCJkaXNwYXRjaCIsIndlYXRoZXIiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZLEFBQWlCOztBQUM3QixBQUFPLEFBRVA7Ozs7Ozs7O0FBQU8sSUFBTSxrQ0FBYSxTQUFiLEFBQWEsV0FBQSxBQUFFLFNBQWEsQUFDeEM7O1FBQ08sWUFEQSxBQUNZLEFBQ2xCO1dBRkQsQUFBTyxBQUVHLEFBRVY7QUFKTyxBQUNOO0FBRkssQUFPUDs7QUFBTyxJQUFNLHNDQUFlLFNBQWYsQUFBZSxhQUFBLEFBQUUsU0FBYSxBQUMxQztTQUFBLEFBQVEsSUFBUixBQUFhLEFBQ2I7UUFBTyxvQkFBWSxBQUNsQjtrQkFBQSxBQUFNLElBQUksK0RBQStELFFBQXpFLEFBQWlGLFNBQWpGLEFBQ0UsS0FBTSxvQkFBWSxBQUNsQjtXQUFBLEFBQVEsSUFBSyxTQUFiLEFBQXNCLEFBQ3RCO09BQU0sZUFBZSxTQUFyQixBQUE4QixBQUM5QjtPQUFNO2FBQ0ksYUFBQSxBQUFhLFFBQWIsQUFBcUIsR0FEVixBQUNhLEFBQ2pDO1NBQUssYUFBQSxBQUFhLFFBQWIsQUFBcUIsR0FBckIsQUFBd0IsU0FBeEIsQUFBaUMsU0FGbEIsQUFFMkIsQUFDL0M7U0FBSyxhQUFBLEFBQWEsUUFBYixBQUFxQixHQUFyQixBQUF3QixTQUF4QixBQUFpQyxTQUh2QyxBQUFxQixBQUcyQixBQUVoRDtBQUxxQixBQUNwQjtZQUlRLFdBQVksRUFBQyxTQUF0QixBQUFTLEFBQVksQUFBVSxBQUMvQjtBQVZGLEtBQUEsQUFVSSxNQUFPLGlCQUFTLEFBQ2xCO1dBQUEsQUFBUSxJQUFSLEFBQWEsQUFDYjtBQVpGLEFBYUE7QUFkRCxBQWVBO0FBakJNIiwiZmlsZSI6ImFjdGlvbkNyZWF0b3IuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvUmVhY3QvbXktYmxvZyJ9