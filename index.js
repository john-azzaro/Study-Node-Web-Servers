const http = require('http');                                                      // first, we load the http module and save as a constant "http"
const url = require('url');                                                        // ... and url module
const path = require('path');                                                      // ... and path module
const fs = require('fs');                                                          // ... and file system module

const mimeTypes = {                                                                // ... mimeTypes object ("mimeType" label used to identify a type of data) lists the types of data we can serve.
  "html": "text/html",                                                                 // so we want to be able to serve html
  "js": "text/javascript",                                                             // ... and javascript files 
  "css": "text/css",                                                                   // ... and css files         
  "jpeg": "image/jpeg",                                                                // ... and jpeg images
  "jpg": "image/jpg",                                                                  // ... and jpg images
  "png": "image/png",                                                                  // ... and png images
}        

http.createServer(function(req, res) {                                             // Then, you want to create a server
	let uri = url.parse(req.url).pathname;                                              // use the url module and convert request.url into an object, and then get the path name and store as "uri"  
  let fileName = path.join(process.cwd(), unescape(uri));                               // use the path module and join with two arguments: "process.cwd" returns string for current working directory and decondeURI to decode uri  
  console.log('Loading' + uri);                                                        // then log to console the uri begin loaded.
  let stats;
                                                                                   // Then to check for the file you are requesting (i.e. index.html, index.css, etc.) with a try/catch block
  try{                                                                                  
    stats = fs.lstatSync(fileName);                                                    // return the status of the fileName (synchronously)
  } catch(e) {                                                                       // if not, respond with the error
    res.writeHead(404, {'Content-type': 'text/plain'});                                 // ... by responding with an error status code and content type.
    res.write('404 Not Found\n');                                                       // ... and write "404 Not found" and add \n to indicate end-of-line.
    res.end();                                                                         // ... end response 
    return;                                                                            //... and return.
  }

  if(stats.isFile()) {                                                              // if it is a file...
    let mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];         // find out what type of file it is
    res.writeHead(200, {"Content-type": mimeType});                                    // response will be 200 (good) and content type

    let fileStream = fs.createReadStream(fileName);                                    // for the filestream variable, it will be set to the file system module and chain a method called createReadStream
    fileStream.pipe(res);                                                              // then pipe the response
  } else if (stats.isDirectory()){                                                 // if it is a directory...
    res.writeHead(302, {                                                              // response if there is no filename will automatically load index.html
      "Location":"index.html"
    });
    res.end();                                                                        //... and end response.       
  } else {         
    res.writeHead(500, {"Content-type": "text/plain" });                              // and if it is not a file or a directory, send a 500 error
    res.write('500 internal error');                                                  // write 500 internal error
    res.end()                                                                         // and end response.
  }

}).listen(1337);                                                                     // then lastly, listen on port 1337 for a request                                                          