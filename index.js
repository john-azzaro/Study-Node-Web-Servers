const http = require('http');                                       // first, we load the http module and save as a constant "http"
const url = require('url');                                         // .., and url module
const path = require('path');                                       // ... and path module
const fx = require('fs');                                           // ... and file system module

const mimeTypes = {                                                  // ... mimeTypes object ("mimeType" label used to identify a type of data) lists the types of data we can serve.
  "html": "text/html",                                                  // so we want to be able to serve html
  "js": "text/javascript",                                              // ... and javascript files 
  "css": "text/css",                                                    // ... and css files         
  "jpeg": "image/jpeg",                                                 // ... and jpeg images
  "jpg": "image/jpg",                                                   // ... and jpg images
  "png": "image/png",                                                   // ... and png images
}        

