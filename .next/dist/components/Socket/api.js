'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.subscribeToNewMessage = exports.createMessage = undefined;

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = (0, _socket2.default)('http://localhost:8000');
/*
socket.on('connect', () => {
	console.log('connected.');
});*/

var createMessage = exports.createMessage = function createMessage(message) {
	// socket.on('newMessage', message => callback(null, message));
	socket.emit('createMessage', message);
};

var subscribeToNewMessage = exports.subscribeToNewMessage = function subscribeToNewMessage(callback) {
	socket.on('newMessage', function (message) {
		return callback(null, message);
	});
};
/*
socket.on('disconnect', () => {
	console.log('disconnected.');
});*/

// this.props.onSocketConnect({ socket: socket });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNvY2tldFxcYXBpLmpzIl0sIm5hbWVzIjpbIm9wZW5Tb2NrZXQiLCJzb2NrZXQiLCJjcmVhdGVNZXNzYWdlIiwibWVzc2FnZSIsImVtaXQiLCJzdWJzY3JpYmVUb05ld01lc3NhZ2UiLCJjYWxsYmFjayIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFNLFNBQVMsc0JBQVcsQUFBWCxBQUFmO0FBQ0EsQUFLQTs7Ozs7QUFBTyxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixjQUFDLEFBQUQsU0FBYSxBQUN4QztBQUNBO1FBQU8sQUFBUCxLQUFZLEFBQVosaUJBQTZCLEFBQTdCLEFBQ0Q7QUFITSxBQUtQOztBQUFPLElBQU0sd0RBQXdCLFNBQXhCLEFBQXdCLHNCQUFDLEFBQUQsVUFBYyxBQUNsRDtRQUFPLEFBQVAsR0FBVSxBQUFWLGNBQXdCLG1CQUFBO1NBQVcsU0FBUyxBQUFULE1BQWUsQUFBZixBQUFYO0FBQXhCLEFBQ0E7QUFGTTtBQUdQOzs7OztBQUtBIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9SZWFjdC9teS1ibG9nIn0=