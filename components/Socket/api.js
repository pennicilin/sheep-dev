import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');
/*
socket.on('connect', () => {
	console.log('connected.');
});*/

export const createMessage = (message) => {
  // socket.on('newMessage', message => callback(null, message));
  socket.emit('createMessage', message);
}

export const subscribeToNewMessage = (callback) => {
	socket.on('newMessage', message => callback(null ,message));
};
/*
socket.on('disconnect', () => {
	console.log('disconnected.');
});*/

// this.props.onSocketConnect({ socket: socket });