// new app to run hello world
// Importing the built-in HTTP module
const http = require('http');

// Defining the hostname and port for the server
const hostname = '127.0.0.1';
const port = 3000;

// Creating a server instance using the HTTP module
const server = http.createServer((req, res) => {
  // Setting the response HTTP header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Sending the "Hello, World!" message to the client
  res.end('Hello, World!\n');
});

// Starting the server and listening to incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
