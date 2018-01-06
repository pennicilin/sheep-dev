// This file doesn't not go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
// const { createServer } = require('http');
const http = require('http');
const { parse } = require('url');
const next = require('next');
const socketIO = require('socket.io');;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const server = http.createServer(app);

// server.listen(3008, () => {
// 	console.log('Server On.');
// });

// app.prepare().then(() => {
//   socketIO(createServer((req, res) => {
//       // Be sure to pass `true` as the second argument to `url.parse`.
//       // This tells it to parse the query portion of the URL.
//       const parsedUrl = parse(req.url, true);
//       const { pathname, query } = parsedUrl;
//       // app.render(req, res, pathname , query);
//       handle(req, res, parsedUrl);
//      /* if (pathname === '/a') {
//         app.render(req, res, '/b', query)
//       } else if (pathname === '/b') {
//         app.render(req, res, '/a', query)
//       } else {
//         handle(req, res, parsedUrl)
//       }*/
//     }).listen(3008, err => {
//       if (err) throw err;
//       console.log('> Ready on http://localhost:3008');
//     }));
//   // const IO = socketIO(server);
// });

app.prepare().then(() => {
  	const server = http.createServer((req, res) => {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      // app.render(req, res, pathname , query);
      handle(req, res, parsedUrl);
     
    }).listen(8000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:8000');
    })

  const io = socketIO(server);

  io.on('connection', ( client ) => {
  	console.log('New User connected');

  	client.on('disconnect', () => {
  		console.log('User disconnected.');
  	});

    client.on('createMessage', (data) => {
      console.log('User create message.', data);
      io.emit('newMessage', data);
    });

  });

});

// const IO = socketIO(app);