const server = require('./server');
const port = 3003;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
})