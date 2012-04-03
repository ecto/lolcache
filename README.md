#lolcache

Stupid simple asynchronous in-memory caching layer for node.

I got tired of writing this over and over so I made it into a module.

![](http://i.imgur.com/8fuB6.jpg)

## install

    npm install lolcache

## usage

````javascript
var lol = require('lolcache');

var kittens = function (cb) {
  // some async database call or whatever
  studyKittens(function (kittenData) {
    cb({
      lol: kittenData
    });  
  });
}

var kittenCache = new lol.Cache({
  ttl: 2000,     // time in milliseconds to keep data in memory
  data: kittens  // function to call when cache is stale
});

setInterval(function () {
  kittenCache.get(console.log);
}, 1000);
````

## license 

(The MIT License)

Copyright (c) 2011 Cam Pedersen <cam@onswipe.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

