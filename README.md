# Node Web Servers Study

<br>

## What is Node Web Servers Study?
Node Web Servers Study is a study in the construction of a basic web server WITHOUT frameworks like express.  Suffice to say that implementing express applications is MUCH easier, however taking a little bit of time to study web servers without express provides a great deal of insight into what happens underneath the hood and try to understand the system a little bit more.  If you would like to see the express study of this particular project, please take a look.

Here are a few questions examined in this study:

* [How do I install the Web Servers Study?](#How-do-you-install-the-Web-Servers-Study)
* [What are the key takeaways from the Node Web Servers Study?](#What-are-the-key-takeaways-from-the-Node-Web-Servers-Study)
* [How do you install the Web Servers Study?](#How-do-you-install-the-Web-Servers-Study)
* [What are the key features of the Node Web Servers Study?](#What-are-the-key-features-of-the-Node-Web-Servers-Study)
* [Screenshots](#Screenshots)

<br>

## How do you install the Web Servers Study?
1. After cloning this repo, run ```npm install``` at the command line.
2. To stat the app, run ```node index.js``` at the command line.
3. Visit http://localhost:3000 to see the study live.

<br>

## What are the key takeaways from the Node Web Servers Study?

<dl>

### The http module.
--------
<dd>

In order to allow client-server communication via HTTP protocol, you need to use the built-in ``` http ``` module.  This module provides the interface to create either an HTTP server of HTTP client that can communicate with other clients or servers. Additionally, it should be noted that the ```http``` module is a streaming interface. 

```JavaScript
    cosnt http: require('HTTP')
```


</dd>

### Mimetypes set the type of files you want to serve.
--------
<dd>

When a request is made for a particular file on your server, the Mimetype essentially instructs your browser as to how it should be handled. In the case of this study, the Mimetype for the html page to interpret all the files with the *html* extension to interpret those as HTML document files.


```JavaScript
    const mimeTypes = { 
    "html": "text/html",                                         // serve html...
    "js": "text/javascript",                                     // ... and javascript files 
    "css": "text/css",                                           // ... and css files         
    "jpeg": "image/jpeg",                                        // ... and jpeg images
    "jpg": "image/jpg",                                          // ... and jpg images
    "png": "image/png",                                          // ... and png images
    }  
```





</dd>



</dl>


<br>

## Does the Node Web Servers Study feature commentary?
Yes! I use extensive Commentary (mostly in the form of my thought process) so that the new and curious can follow the logic in the program and get an idea of my reasoning behind each and every line of code.  In addition to my line-by-line commantary, I also provide a Process text file that gives a good outline of my design and implementation process. 

<br>

## What are the key features of the Node Web Servers Study?
Since this study is ongoing, basic functionalities are covered first and more advanced features are added or will be added in the future.  I divided this particular study into different branches covering different aspects of basic node servers, which i list below:


| **Features:**                            | **Feature Notes:**                             |
| ---------------------------------------- | ----------------------------------------------|
| basic web server                             |  see nodeWebServer branch             |
| basic web server with pages                             |  see nodeHttpWebServer branch               |
| Web server with fully functioning site                            |  see basicServerSite branch               |



<br>

## Screenshots
![wss-home](https://user-images.githubusercontent.com/37447586/61836087-85a10c00-ae33-11e9-8de5-f179fee1e74c.png)
![wss-discover](https://user-images.githubusercontent.com/37447586/61836088-85a10c00-ae33-11e9-8a21-2f29ea9bf5d1.png)
![wss-services](https://user-images.githubusercontent.com/37447586/61836089-85a10c00-ae33-11e9-9623-38bc7e896361.png)
![wss-contact](https://user-images.githubusercontent.com/37447586/61836090-85a10c00-ae33-11e9-8d26-b62cfdee15c4.png)
