const http = require('http');                                       // first, we load the http module and save as a constant "http"

const hostname = '127.0.0.1';                                       // "hostname" is the local host
const port = 3000;                                                  // "port" is the localhost we can use to access our application.

const server = http.createServer((req, res) => {                   // with the http module, we want to create a server "createServer" method with...
  res.statusCode = 200;                                            //... a reponse status code of 200 (means ok)
  res.setHeader('Content-Type', 'text/plain');                     //... setting the content type to text
  res.end('Hello World\n');                                        //... and end the response with "Hello World"
});

server.listen(port, hostname, () => {                              // Then the server will listen on port 3000 (see "port" variable) and...
  console.log(`Server running at http://${hostname}:${port}/`);    // ... in the console print out the hostname and port the server is on!
});