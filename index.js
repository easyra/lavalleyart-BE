const server = require('./server');

server.listen('9000', err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running`);
  }
});
