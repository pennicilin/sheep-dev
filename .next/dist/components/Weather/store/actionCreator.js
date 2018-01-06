'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.checkWeather = exports.setWeatherEnd = exports.setWeather = undefined;

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

var setWeatherEnd = exports.setWeatherEnd = function setWeatherEnd(payload) {
	return {
		type: actionTypes.SET_WEATHER_END,
		payload: payload
	};
};

var checkWeather = exports.checkWeather = function checkWeather(payload) {
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
			payload.callback({ weather: locationInfo });
			// dispatch(setSocketEvent( {weather: locationInfo} ));
		}).catch(function (error) {
			console.log(error);
		});
	};
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdlYXRoZXJcXHN0b3JlXFxhY3Rpb25DcmVhdG9yLmpzIl0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwiYXhpb3MiLCJzZXRXZWF0aGVyIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfV0VBVEhFUiIsInNldFdlYXRoZXJFbmQiLCJTRVRfV0VBVEhFUl9FTkQiLCJjaGVja1dlYXRoZXIiLCJnZXQiLCJhZGRyZXNzIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImRhdGEiLCJyZXNwb25zZURhdGEiLCJsb2NhdGlvbkluZm8iLCJyZXN1bHRzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJsYXQiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibG5nIiwiZGlzcGF0Y2giLCJ3ZWF0aGVyIiwiY2FsbGJhY2siLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZLEFBQWlCOztBQUM3QixBQUFPLEFBRVA7Ozs7Ozs7O0FBQU8sSUFBTSxrQ0FBYSxTQUFiLEFBQWEsV0FBQSxBQUFFLFNBQWEsQUFDeEM7O1FBQ08sWUFEQSxBQUNZLEFBQ2xCO1dBRkQsQUFBTyxBQUVHLEFBRVY7QUFKTyxBQUNOO0FBRkssQUFPUDs7QUFBTyxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixjQUFBLEFBQUUsU0FBYSxBQUMzQzs7UUFDTyxZQURBLEFBQ1ksQUFDbEI7V0FGRCxBQUFPLEFBRUcsQUFFVjtBQUpPLEFBQ047QUFGSyxBQU9QOztBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLGFBQUEsQUFBRSxTQUFhLEFBQzFDO1FBQU8sb0JBQVksQUFFbEI7O2tCQUFBLEFBQU0sSUFBSSwrREFBK0QsUUFBekUsQUFBaUYsU0FBakYsQUFDRSxLQUFNLG9CQUFZLEFBQ2xCO1dBQUEsQUFBUSxJQUFLLFNBQWIsQUFBc0IsQUFDdEI7T0FBTSxlQUFlLFNBQXJCLEFBQThCLEFBQzlCO09BQU07YUFDSSxhQUFBLEFBQWEsUUFBYixBQUFxQixHQURWLEFBQ2EsQUFDakM7U0FBSyxhQUFBLEFBQWEsUUFBYixBQUFxQixHQUFyQixBQUF3QixTQUF4QixBQUFpQyxTQUZsQixBQUUyQixBQUMvQztTQUFLLGFBQUEsQUFBYSxRQUFiLEFBQXFCLEdBQXJCLEFBQXdCLFNBQXhCLEFBQWlDLFNBSHZDLEFBQXFCLEFBRzJCLEFBRWhEO0FBTHFCLEFBQ3BCO1lBSVEsV0FBWSxFQUFDLFNBQXRCLEFBQVMsQUFBWSxBQUFVLEFBQy9CO1dBQUEsQUFBUSxTQUFVLEVBQUMsU0FBbkIsQUFBa0IsQUFBVSxBQUM1QjtBQUNBO0FBWkYsS0FBQSxBQVlJLE1BQU8saUJBQVMsQUFDbEI7V0FBQSxBQUFRLElBQVIsQUFBYSxBQUNiO0FBZEYsQUFlQTtBQWpCRCxBQWtCQTtBQW5CTSIsImZpbGUiOiJhY3Rpb25DcmVhdG9yLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL1JlYWN0L215LWJsb2cifQ==