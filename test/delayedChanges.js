var lol = require('../');

var cache = new lol.Cache({
  ttl: 5000,
  data: function (cb) {
    setTimeout(function () {
      cb({
        time: +new Date
      });
    }, 1000);
  }
});

setInterval(function () {
  cache.get(console.log);
}, 500);
