'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = require('../components/Posts/store/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('../components/Weather/store/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = function initStore() {

	var rootReducer = (0, _redux.combineReducers)({
		'post': _reducer2.default,
		'weather': _reducer4.default
		// 'merchants': merchantReducer,
		// 'webUI': webUiReducer
	});
	var composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
	return (0, _redux.createStore)(rootReducer, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

exports.default = initStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlXFxpbml0U3RvcmUuanMiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlIiwidGh1bmsiLCJwb3N0UmVkdWNlciIsIndlYXRoZXJSZWR1Y2VyIiwiaW5pdFN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlRW5oYW5jZXJzIiwiZ2xvYmFsIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTLEFBQWEsQUFBaUIsQUFBaUI7O0FBQ3hELEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBb0I7Ozs7OztBQUUzQixJQUFNLFlBQVksU0FBWixBQUFZLFlBQU0sQUFFdkI7O0tBQU07QUFBOEIsQUFDM0IsQUFDUjtBQUFXLEFBQ1g7QUFDQTtBQUpELEFBQW9CLEFBQWdCLEFBTXBDO0FBTm9DLEFBQ25DLEVBRG1CO0tBTWQsbUJBQW1CLE9BQXpCLEFBQXlCLEFBQU8sQUFBd0MsQUFDeEU7UUFBTyx3QkFBQSxBQUFZLGFBQWEsaUJBQWhDLEFBQU8sQUFBeUIsQUFBaUIsQUFBZ0IsQUFDakU7QUFWRCxBQVlBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluaXRTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9SZWFjdC9teS1ibG9nIn0=